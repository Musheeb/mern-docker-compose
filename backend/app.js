require("dotenv").config({ quiet: true });
const express = require("express");
const app = express();
const database = require("./config/db.config");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 app is running on PORT ${PORT}`);
});

database();
