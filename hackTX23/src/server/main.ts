import express from "express";
const mongoose = require('mongoose');

const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
app.get('/users', (req,res) => {
  res.json(users)
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
    users.push(user);
    res.status(201).send('User created successfully');
  }
  catch{
    res.status(500).send("Failed to create User");
  }
});

//Authenticate User
app.post('/users/login',async (req,res)=> {
  //checks if the account exists and if the password is correct
  // const user: any = users.find(you: any => you.email == req.body.email)
  const user: any = users.find(function(usr: any) {
    return usr.email == req.body.email
  })
  if (user == null){
    return res.status(400).send('Cannot find user')
  }
  try{
    if( await bcrypt.compare(req.body.password, user.password)){
      res.send('Success')
    }
    else{
      res.send('Not Allowed')
    }
  } catch{
    res.status(500).send()
  }
})

// Update user data
// app.put('/users', async (req : any, res) => {
 
//   const user: any = users.find(function(usr: any) {
//     return usr.email == req.body.email
//   })
//   if (user == null){
//     return res.status(400).send('Cannot find user')
//   }
//   try {
//     // Update user data based on the request body
//     for (const key in req.body) {
//       if (Object.prototype.hasOwnProperty.call(req.body, key)) {
//         user[key] = req.body[key];
//       }
//     }

//     res.send('User data updated successfully');
//   } catch {
//     res.status(500).send('Failed to update user data');
//   }
// });

// app.get("/hello", (_, res) => {
//   res.send("Hello Vite + React + TypeScript!");
// });

app.listen(3000, () => 
  console.log("Server is listening on port 3000...")
);
