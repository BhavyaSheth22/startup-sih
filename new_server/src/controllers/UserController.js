const User = require("../models/User");
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

//user Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    const token = auth.signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
      data: {
        userID: user._id, username: newuser.name
      }
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

//create user assistance request
exports.createAssistanceRequest = async (req, res) => {
  try {
    const assistanceRequest = await AssistanceRequest.create({
      ...req.body,
      user: req.userId
    });
    res.status(200).json({
      status: "success",
      data: {
        assistanceRequest
      }
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};