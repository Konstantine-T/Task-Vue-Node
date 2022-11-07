const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("testman");
});

module.exports = router;
