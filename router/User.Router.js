const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const { UserModel } = require("../models/User.models");
const app = express();

const UserRouter = express.Router();
UserRouter.use(express.json());

//! Making register Route

UserRouter.post("/api/register", async (req, res) => {
  try {
    // getting data from Usermodel for registering
    const { name, email, password, address } = req.body;
    console.log(req.body);

    // if user already registered then we will find by email
    let user = await UserModel.find({ email });
    //then we check if user is already registered

    if (user.length > 0) {
      res.send(`USER ALREADY REGISTERED`);
    } else {
      try {
        // we hash the password by bcrypt
        bcrypt.hash(password, 6, async function (err, hash) {
          const user = new UserModel({
            name,
            email: email,
            password: hash,
            address,
          });

          console.log(user);
          // save user in database
          await user.save();

          // sending notification of successful registration
          res.status(201).send({ message: `USER REGISTERED SUCCESSFULLY` });
        });
      } catch (error) {
        // sending notification of failed registration
        res.status(404).send({ message: `ERROR IN REGISTERING` });
      }
    }
  } catch (error) {
    res.status(404).send({ message: `ERROR IN REGISTERING` });
  }
});

//! Making login route for user

UserRouter.post("/api/login", async (req, res) => {
  // matching with email and password
  const { email, password } = req.body;
  console.log(req.body);

  try {
    // finding by email that  will be unique
    const user = await UserModel.findOne({ email });
    console.log(user);

    // checking for password matches
    const hashed_password = user?.password;

    // check for the user
    if (user) {
      // using bcrypt
      bcrypt.compare(password, hashed_password, async function (err, result) {
        // checking for the result of the user
        if (result) {
          // creating token
          const token = jwt.sign({ user_id: user._id }, "food", {
            expiresIn: "7d",
          });
          console.log(token);
          // sending notification of successful login
          res
            .status(201)
            .send({ token, message: `USERS LOGIN DONE`, user_id: user._id });
        } else {
          console.log(`passwword mismatched`);
          res.send(`passwword mismatched`);
        }
      });
    } else {
      console.log(`USER NOT FOUND`);
      res.send(`USER NOT FOUND`);
    }
  } catch (error) {
    console.log(error.message);
    // sending notification of failed login attempt
    res.status(404).send({ error: `error in login: ${error.message}` });
  }
});

UserRouter.patch("/api/user/:id/reset", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id)
    res.status(204).send(`updated detailed user successful reset`)
  } catch (error) {
    console.log(error.message)
  }
});

module.exports = {
  UserRouter,
};
