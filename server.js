// import
const express = require("express");
const colors = require("colors");

// rest object
const app = express();

// routes
app.get("/", (req, res) => res.status(200).send("<h1>Welcome to Server</h1>"));

// port
PORT = 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
