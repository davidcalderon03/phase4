// If you get the error "Client does not support authentication protocol requested by server; consider upgrading MySQL client":
// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "business_supply",
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + connection.threadId);
});

app.get("/employee", (req, res) => {
    connection.query("SELECT * FROM employees", function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
      res.send(result);
  });
});

app.get("/product", (req, res) => {
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

app.get("/van", (req, res) => {
  connection.query("SELECT * FROM vans", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

app.get("/business", (req, res) => {
  connection.query("SELECT * FROM businesses", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

app.post("/addemployee", (req, res) => {
  console.log(req.body);
  var query = "CALL add_employee('" +
      req.body.username + "','" + 
      req.body.firstName + "','" + 
      req.body.lastName + "','" + 
      req.body.address + "','" + 
      req.body.birthdate + "','" + 
      req.body.taxID + "','" + 
      req.body.hiredDate + "'," + 
      req.body.experience + "," + 
      req.body.salary + ");";
      console.log(query);
  connection.query(
    query
  , function (err, result) {
    if (err) { 
      console.log("Error: " + err.sqlMessage);
      res.json({
        message: err.sqlMessage
      });
    } else {
      console.log("Result: " + result);
      res.json({
        message: 'success'
      });
    } 
});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
