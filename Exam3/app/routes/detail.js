const router = require("express").Router(),
detailController = require("../controllers/detailController");

// router.use("/", function (req, res, next) {
//   if (!req.session.user) next();
//   // next("route");
// });

router.get("/", (req, res) => {
    detailController.index(req, res);
});

module.exports = router;
