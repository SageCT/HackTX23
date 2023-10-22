import express from "express";
import ViteExpress from "vite-express";

require('dotenv').config()
const app = express();
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
app.use(express.json());

const users = [
  {
    fname: 'Kevin',
    lname: 'Zheng',
    email: 'kevinzheng14815@gmail.com',
    password: '123',
    location: 'Houston'
  },
  {
    fname: 'Ujwal',
    lname: 'Joshi',
    email: 'ujwaljoshi12345@gmail.com',
    password: '321',
    location: 'Houston'
  }
]
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
app.post('/users/login', async (req, res) => {
  // Check if the account exists and if the password is correct
  const user = users.find(user => user.email === req.body.email);

  if (user === undefined) {
    return res.status(400).send('Cannot find user');
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      // Password is correct, generate and send a JWT token
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      res.send('Not Allowed');
    }
  } catch (error) {
    res.status(500).send();
  }
});



app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () => 
  console.log("Server is listening on port 3000...")
);
