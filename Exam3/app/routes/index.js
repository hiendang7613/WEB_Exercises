const router = require("express").Router(),
  welcome = require("./welcome"),
  detail = require("./detail");

router.use((req, res, next) => {
  if (!req.session.user) {
    next()
    // res.redirect("http://localhost:9000/signin");
  }
});

router.use("/", welcome);
router.use("/detail", detail);

module.exports = router;
