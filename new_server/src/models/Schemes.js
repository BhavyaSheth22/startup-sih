const mongoose = require("mongoose");

const scheme= new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  ministry: {
    type: String,
    required: true,
  },
  links: {
    type: String,
    required: true,
  },
});

const schemeModel = mongoose.model("Scheme", scheme);

module.exports = schemeModel;
