// connecting to mongodb using mongoose
const mongoose = require("mongoose");
//package to store global variables
const config = require("config");
// connection link of mongodb
const MONGODB_URL = config.get("MONGODB_URL");

// connecting to mongodb using above url
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB connected!!!!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
