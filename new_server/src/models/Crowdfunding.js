const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CrowdfundingSchema = new Schema(
  {
    orgId: {
      type: Schema.Types.ObjectId,
      ref: "organization"
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    totalAmount: {
      type: Number,
      required: false
    },
    currentAmount: {
      type: Number,
      required: false,
      default:0
    },
    imageUrl: {
      type: String,
      required: true
    },
    status:{
      type:String,
      default:"incomplete"
    },
    volunteers: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user"
        }
      ],
      default: []
    }
  },
  { timestamps: true }
);

const Crowdfunding = mongoose.model("crowdfunding", CrowdfundingSchema);
module.exports = Crowdfunding;
