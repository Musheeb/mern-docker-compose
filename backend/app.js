const express = require("express");
const app = express();
const database = require("./config/db.config");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 app is running on PORT ${PORT || 3000}`);
});

database();
