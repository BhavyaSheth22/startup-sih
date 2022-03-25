const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const company = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: validator.isEmail
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  daoAddress:{
    type:String
  },
  description: {
    type: String,
    required: true
  }
});

company.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

company.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Company = mongoose.model("Company", company);

module.exports = Company;
