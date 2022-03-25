const User = require("../models/User");
const Company = require("../models/Company");
const Incubator = require("../models/Incubator");

const axios = require("axios");
const auth = require("../utilities/auth");


//Register user
exports.registerUser = async (req, res) => {
  try {
    const user = await User.findOne({
      $or: [{ email: req.body.email }]
    });
 //   console.log(user, [{ userID: req.body.userID }, { email: req.body.email }]);
    if (user) {
      return res.status(400).json({
        error: "user with this ID or email already exists"
      });
    }
    const { name, email, description, password, role} = req.body;  
    const newuser = await User.create({
      name,
      email,
      description,
      password,
      role
    });
    const token = auth.signToken(newuser._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newuser._id, username: newuser.name
      }
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

exports.registerCompany = async (req, res) => {
  try {
    const user = await Company.findOne({
      $or: [{ email: req.body.email }]
    });
 //   console.log(user, [{ userID: req.body.userID }, { email: req.body.email }]);
    if (user) {
      return res.status(400).json({
        error: "user with this ID or email already exists"
      });
    }
    const { name, email, description, password} = req.body;  
    const newuser = await Company.create({
      name,
      email,
      description,
      password
    });
    const token = auth.signToken(newuser._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newuser._id, username: newuser.name
      }
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};


exports.registerIncubator = async (req, res) => {
  try {
    const user = await Incubator.findOne({
      $or: [{ email: req.body.email }]
    });
 //   console.log(user, [{ userID: req.body.userID }, { email: req.body.email }]);
    if (user) {
      return res.status(400).json({
        error: "user with this ID or email already exists"
      });
    }
    const { name, email, description, password} = req.body;  
    const newuser = await Incubator.create({
      name,
      email,
      description,
      password
    });
    const token = auth.signToken(newuser._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newuser._id, username: newuser.name
      }
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};


//user Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password,userType } = req.body;
    console.log(req.body);
    let user;
    if(userType==="user"){
    user = await User.findOne({ email }).select("+password");
    }
    else if(userType==="company"){
      user = await Company.findOne({ email }).select("+password");
    }else if(userType==="incubator"){
      user = await Incubator.findOne({ email }).select("+password");
    }
    
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    const token = auth.signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
      data: {
        userID: user._id, username: user.name
      }
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

