var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

app.use(express.static("public"));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("index");
    });

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/portfolio", function(req, res) {
  res.render("portfolio");
});

app.get("/CONTACTME", function(req, res) {
  res.render("CONTACTME");
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });