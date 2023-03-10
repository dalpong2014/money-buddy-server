const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8080;
app.use(
  cors({
    origin: ["http://localhost:3000", "https://money-buddy-app.onrender.com"],
  })
);
app.use(express.json());

app.use(require("./routes/record.js"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
