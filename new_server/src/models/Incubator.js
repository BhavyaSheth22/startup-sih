const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const incubator = new mongoose.Schema({
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
  workshops: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "workshop"
      }
    ],
    default: []
  },
  description: {
    type: String,
    required: true
  }
});

incubator.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

incubator.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Incubator = mongoose.model("Incubator", incubator);

module.exports = Incubator;