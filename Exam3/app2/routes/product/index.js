const router = require("express").Router(),
  detail = require("./detail"),
  list = require("./list");

router.use("/", function (req, res, next) {
  if (!req.session.user) next();
});

router.use("/detail", detail);
router.use("/", list);

module.exports = router;
