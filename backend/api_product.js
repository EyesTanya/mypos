const express = require("express");
const router = express.Router();

router.get("/product", (req, res) => {
  res.end("product");
});

module.exports = router;
