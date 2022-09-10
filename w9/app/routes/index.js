const router = require("express").Router(),
  welcome = require("./welcome"),
  signin = require("./signin"),
  signup = require("./signup");
  const userModel = require("../models/userModel");


router.use( (req, res, next)=> {
  if (!req.session.user) {
    if (req.cookies.username) {
      const user = userModel.get(req.cookies.username);
      req.session.user = user[0];
    }
  }
  next();
});

router.use(["/signin", "/signup"], function (req, res, next) {
  if (!req.session.user) next();
});

router.use("/signin", signin);
router.use("/signup", signup);

router.use("/", welcome);


module.exports = router;
