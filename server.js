// import
const express = require("express");

// rest object
const app = express();

// routes
app.get("/", (req, res) => res.status(200).send("<h1>Welcome to Server</h1>"));

// listen
PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
