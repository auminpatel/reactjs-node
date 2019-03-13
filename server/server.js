var express = require("express");
var mysql = require("mysql");
//var connection = require("express-myconnection");
var PORT = 4200;
var app = express();
const bodyParser = require("body-parser");
const ServerPortRouter = require("./serverRouter");
const cors = require("cors");
const SELECT = "select * from users";
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3306,
  database: "nodejs"
});

connection.connect(err => {
  if (err) {
    return error;
  }
});

app.use("/server", ServerPortRouter);
app.listen(PORT, function() {
  console.log("Server is running on Port: ", PORT);
});
