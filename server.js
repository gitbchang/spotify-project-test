// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// Requiring the **FOLDER**
// sequelize automatically looks for index.js file to create models
// var db = require("./models");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));


// Static directory
app.use(express.static("app/public"));


// Routes
// =============================================================

// commenting out the below example route and using a single controller file instead
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// var routes = require("./controllers/burgerController.js");

// app.use("/", routes);

/* Load the HTTP library */
var http = require("http");

/* Create an HTTP server to handle responses */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);



// Starts the server to begin listening
// =============================================================
// {force: true}
// db.sequelize.sync().then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });

// });