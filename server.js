const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongooseConnection = require("./config/db.conf");

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

app.use("/api/hospitals", require("./routes/hospitalRoutes"));

mongooseConnection();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
