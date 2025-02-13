const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
var bcrypt = require("bcryptjs");
const jwt = require("./jwt");

router.post("/login", (req, res) => {
  Users.findOne({ username: req.body.username })
    .then(async (doc) => {
      if (doc) {
        isValidPassword = await bcrypt.compare(req.body.password, doc.password);
        if (isValidPassword) {
          const payload = {
            id: doc._id,
            level: doc.level,
            username: doc.username,
          };

          const token = jwt.sign(payload, "100000000000000");

          // reply ok
          res.json({
            result: "ok",
            token,
            message: "Login successfully",
          });
        } else {
          // reply nok - invalid password
          res.json({
            result: "nok",
            message: "Invalid password",
          });
        }
      } else {
        // reply nok - invalid username
        res.json({
          result: "nok",
          message: "Invalid username",
        });
      }
    })
    .catch((e) => {
      res.json({
        result: "nok",
        message: "Internal Error",
      });
    });
});

router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const doc = await Users.create(req.body);
    res.json({
      result: "ok",
      message: doc,
    });
  } catch (e) {
    res.json({
      result: "nok",
      message: e,
    });
  }
});

module.exports = router;
