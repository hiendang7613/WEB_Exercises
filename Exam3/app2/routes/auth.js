const router = require("express").Router(),
  signinController = require("../controllers/signinController");

router.use("/", function (req, res, next) {
  if (!req.session.user) next();
});

router.post("/", signinController.signin);

module.exports = router;
