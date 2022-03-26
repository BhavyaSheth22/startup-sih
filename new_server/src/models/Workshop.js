const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    links: {
      type: String
    },
    fees: {
      type: String
    },
    contact: {
      type: String,
      required: false,
    },
    imgpath: {
      type: String,
      required: false,
    },
  });
  
  const Workshop = mongoose.model('Workshop', workshopSchema);
  module.exports = Workshop;