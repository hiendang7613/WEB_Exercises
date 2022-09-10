const router = require("express").Router(),
  welcomeController = require("../controllers/welcomeController");

// router.use("/", function (req, res, next) {
//   if (!req.session.user) next();
//   // next("route");
// });

router.get("/", (req, res) => {
  if (!req.session.user) {
    welcomeController.index(req, res, req.session.username);
  }
  else{
    welcomeController.index(req, res);
  }
});

module.exports = router;
