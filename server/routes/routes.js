const express = require("express");
const router = express();
require("dotenv").config({ path: __dirname + "/../config/.env" });

router.get("/", (req, res) => {
  res.send("flowers smell nice");
});

module.exports = router;
