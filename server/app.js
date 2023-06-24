const express = require("express");
const app = express();
require("express-async-errors");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const UsersRouting = require("./router/UsersRouting");
const PostRouting = require('./router/Scenarios');
const authirization = require('./midleware/authorizationMidleWare')
var cors = require("cors");
const ErrorHandling = require("./midleware/err-handler");
const notFound = require("./midleware/not-found");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cors()); // Use this after the variable declaration

app.use(bodyParser.json());
app.use(express.json());
app.use("/api/v1", UsersRouting);
app.use("/api/v1/post", authirization, PostRouting);
app.use(notFound);
app.use(ErrorHandling);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
