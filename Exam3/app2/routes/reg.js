const router = require("express").Router(),
  signupController = require("../controllers/signupController");

router.use("/", function (req, res, next) {
  if (!req.session.user) next();
});

router.post("/", signupController.signup);

module.exports = router;
