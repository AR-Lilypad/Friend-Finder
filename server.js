// dependencies
let express = require("express");
// let path = require("path");

//create the express server
let app = express();

// set initial port
let PORT = process.env.PORT || 8080;

//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("app/public"));
//Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// port listening code
app.listen(PORT, function() {
  // Log (server-side)when our server has started
  console.log("App listening on: PORT:" + PORT);
});
