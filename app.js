var express = require("express");
var mysql = require("mysql");
var connection = require("express-myconnection");
var app = express();

connection.connect();
app.use(
  connection(
    mysql,
    {
      hostname: "localhost",
      user: "root",
      password: "password",
      port: 3306,
      database: "nodejs"
    },
    "pool"
  )
);
app.get("/", (req, res) => {});
app.listen(3000, function() {
  console.log("Server running at port 3000");
});
