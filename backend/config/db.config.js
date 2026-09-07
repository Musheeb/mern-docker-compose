const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern-docker-watch");
    console.log("📚 Database connection established");
  } catch (e) {
    console.log("Database connection failed");
  }
};

module.exports = dbConnection;
