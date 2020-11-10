const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");

router.get("/login", (req, res) => {
  res.end("login");
});

router.get("/register",  async (req, res) => {
  const doc = await Users.create(req.body);
  res.json(doc);
});

module.exports = router;
