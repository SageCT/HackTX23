import express from "express";
const mongoose = require('mongoose');
const dataModel = require('./model');
// import * as model from "./model";
const app = express();
const bcrypt = require('bcrypt');
app.use(express.json());

let dbUser = "futuresite_admin";
let dbPass = "EVbv15GvZ8BX7zkk";
let uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.mvingdv.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri).then(() => {
  console.log('connected to db');
}).catch(function(err: any) {
  console.error(err);
});

const users:any = []
//Get user data
app.get('/users',async (req,res) => {
  try{
    const model = await dataModel.find({});
    res.status(200).json(model);
    
  }catch(error : any){
    res.status(500).json({message: error.message});
  }

});
//Add input user data
app.post('/users', async (req,res) => {
  try{
    const EncryptedPassword = await bcrypt.hash(req.body.password,10);
    const user = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: EncryptedPassword,
      location: req.body.location,
    };
    const data = dataModel.create(user);
    res.status(201).json(data);
  }
  catch{
    res.status(500).send("Failed to create User");
  }
});

//Authenticate User
app.post('/users/login',async (req,res)=> {
  //checks if the account exists and if the password is correct
  // const user: any = users.find(you: any => you.email == req.body.email)
 
  try{
    const loginData = await dataModel.find({email:req.body.email});
    if (loginData.length === 0 ){
      return res.status(400).send('Cannot find user')
    }
    // console.log(req.body.password);
    // console.log(loginData[0].password);
    if( await bcrypt.compare(req.body.password, loginData[0].password)){
      res.status(200).json(loginData);
    }
    else{
      res.send('Not Allowed')
    }
  } catch(error:any){
    console.error(error);
    // res.status(500).json({message: error.message});
  }
})

// Update user data
app.put('/users', async (req :any, res) => {
  const emailToUpdate = req.body.email;

  try {
    // Find the user to update
    const userToUpdate = await dataModel.findOne({ email: emailToUpdate });

    if (!userToUpdate) {
      return res.status(404).send('User not found');
    }

    // Update user data based on the request body
    if (req.body.fname) {
      userToUpdate.fname = req.body.fname;
    }

    if (req.body.lname) {
      userToUpdate.lname = req.body.lname;
    }

    if (req.body.location) {
      userToUpdate.location = req.body.location;
    }
    if(req.body.password){
      const EncryptedPassword = await bcrypt.hash(req.body.password,10);
      userToUpdate.password = EncryptedPassword;
    }
  

    // You can add more fields to update as needed
    // Save the updated user data to the database
    await userToUpdate.save();

    res.send('User data updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to update user data');
  }
});




app.listen(3000, () => 
  console.log("Server is listening on port 3000...")
);
