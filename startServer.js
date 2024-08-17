var express = require("express");
var app = express();
var port = 3040;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the database
require('./database')();

// Attach the router
require('./routers/router')(app);

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

// Send the HTML file when accessing the root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
    console.log("App listening on port: " + port);
});
