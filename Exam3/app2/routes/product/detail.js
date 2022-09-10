const router = require("express").Router(),
  detailProductController = require("../../controllers/product/detailProductController");

router.get("/", (req, res) => {
  detailProductController.index(req, res);
});
// router.post("/", signupController.signup);

module.exports = router;
