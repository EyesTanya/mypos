const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.end("login");
});

router.get("/register", (req, res) => {
  res.end("register");
});

module.exports = router;
