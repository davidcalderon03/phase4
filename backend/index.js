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
    console.log("Fetched user table");
    res.send(result);
});
});

app.get("/employee", (req, res) => {
    connection.query("SELECT * FROM employees", function (err, result) {
      if (err) throw err;
      console.log("Fetched employee table");
      res.send(result);
  });
});

app.get("/driver", (req, res) => {
  connection.query("SELECT * FROM drivers", function (err, result) {
    if (err) throw err;
    console.log("Fetched driver table");
    res.send(result);
});
});

app.get("/businessowner", (req, res) => {
  connection.query("SELECT * FROM business_owners", function (err, result) {
    if (err) throw err;
    console.log("Fetched owner table");
    res.send(result);
});
});

app.get("/worker", (req, res) => {
  connection.query("SELECT * FROM workers", function (err, result) {
    if (err) throw err;
    console.log("Fetched worker table");
    res.send(result);
  });
});

app.get("/van", (req, res) => {
  connection.query("SELECT * FROM vans", function (err, result) {
    if (err) throw err;
    console.log("Fetched van table");
    res.send(result);
  });
});

app.get("/product", (req, res) => {
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.log("Fetched product table");
    res.send(result);
  });
});

app.get("/business", (req, res) => {
  connection.query("SELECT * FROM businesses", function (err, result) {
    if (err) throw err;
    console.log("Fetched business table");
    res.send(result);
  });
});

app.get("/location", (req, res) => {
  connection.query("SELECT * FROM locations", function (err, result) {
    if (err) throw err;
    console.log("Fetched location table");
    res.send(result);
  });
});

app.get("/deliveryservice", (req, res) => {
  connection.query("SELECT * FROM delivery_services", function (err, result) {
    if (err) throw err;
    console.log("Fetched delivery service table");
    res.send(result);
  });
});

app.get("/contain", (req, res) => {
  connection.query("SELECT * FROM contain", function (err, result) {
    if (err) throw err;
    console.log("Fetched contain table");
    res.send(result);
  });
});

app.get("/workfor", (req, res) => {
  connection.query("SELECT * FROM work_for", function (err, result) {
    if (err) throw err;
    console.log("Fetched work for table");
    res.send(result);
  });
});

app.get("/fund", (req, res) => {
  connection.query("SELECT * FROM fund", function (err, result) {
    if (err) throw err;
    console.log("Fetched fund table");
    res.send(result);
  });
});

// VIEWS
// 22: Owner View
app.get("/ownerview", (req, res) => {
  connection.query("SELECT * FROM display_owner_view", function (err, result) {
    if (err) throw err;
    console.log("Fetched owner view");
    res.send(result);
  });
});

// 23: Employee View
app.get("/employeeview", (req, res) => {
  connection.query("SELECT * FROM display_employee_view", function (err, result) {
    if (err) throw err;
    console.log("Fetched employee view");
    res.send(result);
  });
});

// 24: Driver View
app.get("/driverview", (req, res) => {
  connection.query("SELECT * FROM display_driver_view", function (err, result) {
    if (err) throw err;
    console.log("Fetched driver view");
    res.send(result);
  });
});

// 25: Location View
app.get("/locationview", (req, res) => {
  connection.query("SELECT * FROM display_location_view", function (err, result) {
    if (err) throw err;
    console.log("Fetched location view");
    res.send(result);
  });
});

// 26: Product View
app.get("/productview", (req, res) => {
  connection.query("SELECT * FROM display_product_view", function (err, result) {
    if (err) throw err;
    console.log("Fetched product view");
    res.send(result);
  });
});

// 27: Service View
app.get("/serviceview", (req, res) => {
  connection.query("SELECT * FROM display_service_view", function (err, result) {
    if (err) throw err;
    console.log("Fetched service view");
    res.send(result);
  });
});

// STORED PROCEDURES //
// 1: Add Owner
app.post("/addowner", (req, res) => {
  console.log(req.body);
  var query = "CALL add_owner('" +
      req.body.username + "','" + 
      req.body.firstName + "','" + 
      req.body.lastName + "','" + 
      req.body.address + "','" + 
      req.body.birthdate + "');";
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
      console.log("Successfully called addowner");
      res.json({
        message: 'success'
      });
    } 
});
});

// 2: Add Employee
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
      console.log("Successfully called addemployee");
      res.json({
        message: 'success'
      });
    } 
});
});

// 3: Add Driver Role
app.post("/adddriverrole", (req, res) => {
  console.log(req.body);
  var query = "CALL add_driver_role('" +
      req.body.username + "','" + 
      req.body.licenseID + "','" + 
      req.body.licenseType+ "'," + 
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
      console.log("Successfully called adddriverrole");
      res.json({
        message: 'success'
      });
    } 
});
});


// 4: Add Worker Role
app.post("/addworkerrole", (req, res) => {
  console.log(req.body);
  var query = "CALL add_worker_role('" +
      req.body.username + "');" ;
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
      console.log("Successfully called addworkerrole");
      res.json({
        message: 'success'
      });
    } 
});
});

// 5: Add Product
app.post("/addproduct", (req, res) => {
  console.log(req.body);
  var query = "CALL add_product('" +
      req.body.barcode + "','" + 
      req.body.iname + "'," + 
      req.body.weight + ");";
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
      console.log("Successfully called addproduct");
      res.json({
        message: 'success'
      });
    } 
});
});

// 6: Add Van
app.post("/addvan", (req, res) => {
  console.log(req.body);
  var query = "CALL add_van('" +
      req.body.id + "'," + 
      req.body.tag + "," + 
      req.body.fuel + "," +
      req.body.capacity + "," +
      req.body.sales + ",'" +
      req.body.drivenby + "');";
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
      console.log("Successfully called addvan");
      res.json({
        message: 'success'
      });
    } 
});
});


// 7: Add Business
app.post("/addbusiness", (req, res) => {
  console.log(req.body);
  var query = "CALL add_business('" +
      req.body.longName + "'," + 
      req.body.rating + "," + 
      req.body.spent + ",'" + 
      req.body.location + "');";
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
      console.log("Successfully called addbusiness");
      res.json({
        message: 'success'
      });
    } 
});
});

// 8: Add Service
app.post("/addservice", (req, res) => {
  console.log(req.body);
  var query = "CALL add_service('" +
      req.body.id + "','" + 
      req.body.longName + "','" + 
      req.body.homeBase + "','" + 
      req.body.manager + "');";
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
      console.log("Successfully called addservice");
      res.json({
        message: 'success'
      });
    } 
});
});

// 9: Add Location
app.post("/addlocation", (req, res) => {
  console.log(req.body);
  var query = "CALL add_location('" +
      req.body.label + "'," + 
      req.body.xCoord + "," + 
      req.body.yCoord + "," + 
      req.body.space + ");";
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
      console.log("Successfully called addlocation");
      res.json({
        message: 'success'
      });
    } 
});
});

// 10: Start Funding
app.post("/startfunding", (req, res) => {
  console.log(req.body);
  var query = "CALL start_funding('" +
      req.body.username + "'," + 
      req.body.invested + ",'" + 
      req.body.business + "','" + 
      req.body.investedDate + "');";
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
      console.log("Successfully called startfunding");
      res.json({
        message: 'success'
      });
    } 
});
});

// 11: Hire Employee
app.post("/hireemployee", (req, res) => {
  console.log(req.body);
  var query = "CALL hire_employee('" +
      req.body.username + "','" + 
      req.body.id + "');";
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
      console.log("Successfully called hireemployee");
      res.json({
        message: 'success'
      });
    } 
});
});

// 12: Fire Employee
app.post("/fireemployee", (req, res) => {
  console.log(req.body);
  var query = "CALL fire_employee('" +
      req.body.username + "','" + 
      req.body.id + "');";
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
      console.log("Successfully called fireemployee");
      res.json({
        message: 'success'
      });
    } 
});
});

// 13: Manage Service
app.post("/manageservice", (req, res) => {
  console.log(req.body);
  var query = "CALL manage_service('" +
      req.body.username + "','" + 
      req.body.id + "');";
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
      console.log("Successfully called manageservice");
      res.json({
        message: 'success'
      });
    } 
});
});

// 14: Takeover Van
app.post("/takeovervan", (req, res) => {
  console.log(req.body);
  var query = "CALL takeover_van('" +
      req.body.username + "','" + 
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
      console.log("Successfully called takeovervan");
      res.json({
        message: 'success'
      });
    } 
});
});

// 15: Load Van
app.post("/loadvan", (req, res) => {
  console.log(req.body);
  var query = "CALL load_van('" +
      req.body.id + "'," + 
      req.body.tag + ",'" + 
      req.body.barcode + "'," +
      req.body.quantity + "," +
      req.body.price + ");";
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
      console.log("Successfully called loadvan");
      res.json({
        message: 'success'
      });
    } 
});
});

// 16: Refuel Van
app.post("/refuelvan", (req, res) => {
  console.log(req.body);
  var query = "CALL refuel_van('" +
      req.body.id + "'," + 
      req.body.tag + "," + 
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
      console.log("Successfully called refuelvan");
      res.json({
        message: 'success'
      });
    } 
});
});

// 17: Drive Van
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
      console.log("Successfully called drivevan");
      res.json({
        message: 'success'
      });
    } 
});
});

// 18: Purchase Product
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
      console.log("Successfully called purchaseproduct");
      res.json({
        message: 'success'
      });
    } 
});
});

// 19: Remove Product
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
      console.log("Successfully called removeproduct");
      res.json({
        message: 'success'
      });
    } 
});
});

// 20: Remove Van
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
      console.log("Successfully called removevan");
      res.json({
        message: 'success'
      });
    } 
});
});

// 21: Remove Driver Role
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
      console.log("Successfully called removedriverrole");
      res.json({
        message: 'success'
      });
    } 
});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
