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

app.use("/api/hospital", require("./routes/hospitalRoutes"));
app.use("/api/secretary", require("./routes/secretaryRoute"));
app.use("/api/civil-registrar", require("./routes/civilRegistrarRoute"));
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/birth-declaration", require("./routes/birthDeclarationRoute"));

mongooseConnection();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
