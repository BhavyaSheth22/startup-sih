require("dotenv").config();
const dbconnect = require("./config/dbconnect.js");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");
const config = require("./config");

const AppError = require("./middleware/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));
app.use(morgan("dev"));

routes(app);

// //Global Error Handling
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

dbconnect();

let port = config.port;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
