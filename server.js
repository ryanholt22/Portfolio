// Dependencies
// =============================================================
var express = require("express");
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");

//var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
app.get("/views/layouts/main.handlebars", function(req, res) {
    res.send('Working page');
});


app.get('/views/layouts/main.handlebars', function (req, res) {
    res.send('hello world')
  })


// Starting the server, syncing our models ------------------------------------/
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;
