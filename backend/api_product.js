const express = require("express");
const router = express();
const interceptors = require("./interceptorX");
router.get(
  "/product",
  interceptors.interceptor1,
  interceptors.interceptor2,
  interceptors.interceptor3,
  (req, res) => {
    res.end("product");
  }
);

module.exports = router;
