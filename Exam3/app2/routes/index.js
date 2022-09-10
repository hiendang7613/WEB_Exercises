const router = require("express").Router(),
auth = require("./auth"),
  signin = require("./signin"), 
  reg = require("./reg"), 
  signup = require("./signup");


router.use( (req, res, next)=> {
  if (req.session.user) {
    res.redirect("http://localhost:8000/");
  }else{
    next();
  }
});


router.use("/signin", signin);
router.use("/signup", signup);
router.use("/auth", auth);
router.use("/reg", reg);

module.exports = router;
