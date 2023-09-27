var mongoose = require("mongoose");
const mongoAtlasUri = `mongodb://localhost:27017/iCivil`;
function mongooseConnection() {
  try {
    mongoose.connect(mongoAtlasUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log("could not connect");
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
}
module.exports = mongooseConnection;
