const router = require("express").Router(),
  welcomeController = require("../controllers/welcomeController");

// router.use("/", function (req, res, next) {
//   if (!req.session.user) next();
//   // next("route");
// });

router.get("/", (req, res) => {
  welcomeController.index(req, res, req.session.username);
});

router.post("/search", async (req, res) => {
  let a = await welcomeController.search(req.body.s,req.body.page);
  res.send(a);
});

router.post("/id", async (req, res) => {
  let a = await welcomeController.get(req.body.i);
  res.send(a);
});

module.exports = router;
