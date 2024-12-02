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

app.get("/user", (req, res) => {
  connection.query("SELECT * FROM users", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
});
});

app.get("/employee", (req, res) => {
    connection.query("SELECT * FROM employees", function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
      res.send(result);
  });
});

app.get("/driver", (req, res) => {
  connection.query("SELECT * FROM drivers", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
});
});

app.get("/businessowner", (req, res) => {
  connection.query("SELECT * FROM business_owners", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
});
});

app.get("/worker", (req, res) => {
  connection.query("SELECT * FROM workers", function (err, result) {
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

app.get("/product", (req, res) => {
  connection.query("SELECT * FROM products", function (err, result) {
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

app.get("/location", (req, res) => {
  connection.query("SELECT * FROM locations", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

app.get("/deliveryservice", (req, res) => {
  connection.query("SELECT * FROM delivery_services", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

app.get("/contain", (req, res) => {
  connection.query("SELECT * FROM contain", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

app.get("/workfor", (req, res) => {
  connection.query("SELECT * FROM work_for", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

app.get("/fund", (req, res) => {
  connection.query("SELECT * FROM fund", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

// VIEWS
app.get("/employeeview", (req, res) => {
  connection.query("SELECT * FROM display_employee_view", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

app.get("/ownerview", (req, res) => {
  connection.query("SELECT * FROM display_owner_view", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    res.send(result);
  });
});

// STORED PROCEDURES

app.post("/addowner", (req, res) => {
  console.log(req.body);
  var query = "CALL add_owner('" +
      req.body.username + "','" + 
      req.body.firstName + "','" + 
      req.body.lastName + "','" + 
      req.body.address + "','" + 
      req.body.birthdate + ");";
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

app.post("/addemployee", (req, res) => {
  console.log(req.body);
  var query = "CALL add_employee('" +
      req.body.username + "','" + 
      req.body.firstName + "','" + 
      req.body.lastName + "','" + 
      req.body.address + "','" + 
      req.body.birthdate + "','" + 
      req.body.taxID + "','" + 
      req.body.hiredDate + "','" + 
      req.body.experience + "','" + 
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

app.post("/adddriverrole", (req, res) => {
  console.log(req.body);
  var query = "CALL add_driver_role('" +
      req.body.username + "','" + 
      req.body.licenseID + "','" + 
      req.body.licenseType+ "','" + 
      req.body.successfulTrips + ");";
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

app.post("/addworkerrole", (req, res) => {
  console.log(req.body);
  var query = "CALL add_worker_role('" +
      req.body.username + ");" ;
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

app.post("/addvan", (req, res) => {
  console.log(req.body);
  var query = "CALL add_van('" +
      req.body.id + "','" + 
      req.body.tag + "','" + 
      req.body.fuel + "','" +
      req.body.capacity + "','" +
      req.body.sales + "','" +
      req.body.drivenby + ");";
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

app.post("/drivevan", (req, res) => {
  console.log(req.body);
  var query = "CALL drive_van('" +
      req.body.id + "'," + 
      req.body.tag + ",'" + 
      req.body.destination + "');";
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

app.post("/removevan", (req, res) => {
  console.log(req.body);
  var query = "CALL remove_van('" +
      req.body.id + "'," + 
      req.body.tag + ");";
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

app.post("/refuelvan", (req, res) => {
  console.log(req.body);
  var query = "CALL refuel_van('" +
      req.body.id + "'," + 
      req.body.tag + "'," + 
      req.body.fuel + ");";
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

app.post("/purchaseproduct", (req, res) => {
  console.log(req.body);
  var query = "CALL purchase_product('" +
      req.body.longName + "','" + 
      req.body.id + "'," + 
      req.body.tag + ",'" + 
      req.body.barcode + "'," + 
      req.body.quantity + ");";
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


app.post("/removeproduct", (req, res) => {
  console.log(req.body);
  var query = "CALL remove_product('" +
      req.body.barcode + "');";
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


app.post("/removedriverrole", (req, res) => {
  console.log(req.body);
  var query = "CALL remove_driver_role('" +
      req.body.username + "');";
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