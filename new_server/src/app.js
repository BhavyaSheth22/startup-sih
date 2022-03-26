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
const UserController = require("./controllers/UserController");
const { youthContract, web3 } = require("./abi");
const PUBLIC_ADDRESS = "0xfB1034C3dc1a34Ea783b8Be313Cb4725D954dC8C";
const PRIVATE_KEY =
  "e2d23c56d6368203faba05526a095fb49b53e66716c2241ad1e89e47e5e08d41";

async () => {
  const BLOCK_NUMBER = await web3.eth.getBlockNumber();
  youthContract.events.daoCreated(
    {
      fromBlock: BLOCK_NUMBER
    },
    async function (error, event) {
      let res = event.returnValues;
      UserController.addDAOAddress(res.id, res.daoId);
    }
  );
};

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
