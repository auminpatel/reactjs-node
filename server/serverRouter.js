const express = require("express");
const app = express();
const serverRouter = express.Router();
var mysql = require("mysql");
const bodyParser = require("body-parser");
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

serverRouter.route("/").get(function(req, res) {
  connection.query("Select * from contact_list", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log(results);
    console.log(results.id);
    res.json(JSON.stringify(results));
  });
});

serverRouter.route("/add").post(function(req, res) {
  let input = JSON.parse(JSON.stringify(req.body));
  let data = {
    fname: input.fname,
    lname: input.lname,
    email: input.email,
    number: input.number,
    url: input.url,
    state: input.state,
    city: input.city,
    zip: input.zip
  };

  connection.query("INSERT INTO contact_list set ? ", data, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;

    console.log(results.id);
    res.send(JSON.stringify(results));
  });
});

serverRouter.route("/edit/:id").get(function(req, res) {
  console.log("hello");
  id = req.params.id;
  connection.query("SELECT * FROM contact_list WHERE id = ?", [id], function(
    error,
    results,
    fields
  ) {
    if (error) throw error;

    console.log(results.id);
    res.json(results);
  });
});

serverRouter.route("/update/:id").post(function(req, res) {
  let input = JSON.parse(JSON.stringify(req.body));
  console.log(req.body);
  let id = req.params.id;
  let data = {
    fname: input.fname,
    lname: input.lname,
    email: input.email,
    number: input.number,
    url: input.url,
    state: input.state,
    city: input.city,
    zip: input.zip
  };
  connection.query(
    "UPDATE contact_list set ? WHERE id = ? ",
    [data, id],
    function(error, results, fields) {
      if (error) res.json(error);
      else res.json("Successfully removed");
    }
  );
  //res.json("hello");
});
serverRouter.route("/delete/:id").get(function(req, res) {
  let idi = req.params.id;

  connection.query("DELETE FROM contact_list  WHERE id = ? ", [idi], function(
    error,
    results,
    fields
  ) {
    if (error) res.json(error);
    else res.json("Successfully removed");
  });
});
module.exports = serverRouter;
