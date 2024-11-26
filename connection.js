const mongoose = require("mongoose");

async function connectMongo (url){
  return mongoose
  .connect(url)
  .then(() => console.log("Database Connected"))
  .catch((err) => {console.log("Error while connecting- ", err)});
};

module.exports = {
  connectMongo,
}