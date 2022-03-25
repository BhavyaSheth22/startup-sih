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
    const { name, email, description, password } = req.body;
    const newuser = await User.create({
      name,
      email,
      description,
      password
    });
    const token = auth.signToken(newuser._id);
    // const d = await axios.post(
    //   `https://20609746ca6df273.api-US.cometchat.io/v3/users`,
    //   {
    //     headers: {
    //       apiKey: "83461e32095a6a5805fd84a5bafbbe8d6d9571b9",
    //       "Content-Type": "application/json",
    //       Accept: "application/json"
    //     }
    //   },
    //   { uid: newuser._id, name: newuser.name }
    // );
    // console.log(d);

    res.status(201).json({
      status: "success",
      token,
      data: {
        userID: newuser._id,
        userName: newuser.name
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
        userID: user._id
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
