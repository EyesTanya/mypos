const express = require("express");
const router = express.Router();

router.get("/transaction", (req, res) => {
  res.end("transaction");
});

module.exports = router;
