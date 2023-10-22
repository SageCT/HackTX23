import express from "express";
const mongoose = require('mongoose');
const dataModel = require('./model');

const IDs = require('./bls-data/seriesID');
import * as blsDat from "./bls-data/occupations";

const app = express();
const bcrypt = require('bcrypt');
app.use(express.json());

let dbUser = "futuresite_admin";
let dbPass = "EVbv15GvZ8BX7zkk";
let uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.mvingdv.mongodb.net/?retryWrites=true&w=majority`;

let statusStr = "";
mongoose.connect(uri).then(() => {
  console.log("connected to db");
  statusStr = "Connected to Database.";
}).catch(function(err: any) {
  statusStr = "Error in establishing database connection.";
  console.error(err);
});

//status route
app.get('/status', (req, res) => {
  res.status(200).send(statusStr);
});

//annual mean salary (all) route
app.get('/meanAnnualSalary/All/:oID', (req, res) => {
  const {oID} = req.params;

  if(!(oID in IDs.nameUS_ALL)) {
    res.status(404).send("INVALID");
    return;
  }
  
  blsDat.getBLSAPICallResult(IDs.nameUS_ALL[oID]).then(
    function(jsonOutput) {
      if(jsonOutput['status'] == "REQUEST_NOT_PROCESSED") {
        res.send("RATE_LIMIT_EXCEEDED"); return;
      }

      let arrData: Array<Object> = jsonOutput["Results"]["series"][0]["data"];
      let latestData: any = arrData.filter(function(elm: any) {
        return elm['latest'] === 'true';
      });

      res.status(200).send(latestData[0]['value']);
    }
  );
});

//annual mean salary (Austin) route
app.get('/meanAnnualSalary/Austin/:oID', (req, res) => {
  const {oID} = req.params;

  if(!(oID in IDs.namesAustin_All)) {
    res.status(404).send("INVALID");
    return;
  }

  blsDat.getBLSAPICallResult(IDs.namesAustin_All[oID]).then(
    function(jsonOutput) {
      if(jsonOutput['status'] == "REQUEST_NOT_PROCESSED") {
        res.send("RATE_LIMIT_EXCEEDED"); return;
      }

      let arrData: Array<Object> = jsonOutput["Results"]["series"][0]["data"];
      let latestData: any = arrData.filter(function(elm: any) {
        return elm['latest'] === 'true';
      });

      res.status(200).send(latestData[0]['value']);
    }
  );
});

//Get user data
app.get('/users', async (req,res) => {
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
  try{
    const loginData = await dataModel.find({email:req.body.email});
    if (loginData.length === 0 ){
      return res.status(400).send('Cannot find user')
    }
    
    if(await bcrypt.compare(req.body.password, loginData[0].password)){
      let userInfo = loginData[0];

      res.status(200).json(userInfo);
    }
    else{
      res.send('Not Allowed')
    }
  } catch(error:any){
    res.status(500).json({message: error.message});
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
