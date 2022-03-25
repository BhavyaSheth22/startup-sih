const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    links: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: false,
    },
  });
  
  const Workshop = mongoose.model('Workshop', workshopSchema);