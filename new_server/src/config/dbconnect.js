require("dotenv").config();
const mongoose = require("mongoose");

function connect() {
  const mongooseOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: process.env.NODE_ENV !== "prod"
  };

  let connectionString = "mongodb+srv://root:root@cluster0.bq6fm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  if (process.env.NODE_ENV === "prod") {
    connectionString = process.env.MONGO_URI_PROD;
  }

  mongoose.connect(connectionString, mongooseOptions);
  mongoose.Promise = global.Promise;
  mongoose.connection.on("open", () => console.log(`MongoDB Connected`));
  mongoose.connection.on("error", console.error.bind(console, "MongoDB Error"));
}

module.exports = connect;
