const router = require("express").Router(),
  listProductController = require("../../controllers/product/listProductController");


router.get("/", (req, res) => {
  listProductController.index(req, res);
});
// router.post("/", listProductController.signup);

module.exports = router;
