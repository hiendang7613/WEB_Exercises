const router = require("express").Router();
const userM = require("../models/user.M");

router.get("/signin", (req, res) => {
  const us = await userM.all();
  console.log(us);
  res.render("account/signin", {
    cssP: () => "css",
    navP: () => "nav",
    footerP: () => "footer",
    scriptsP: () => "scripts",
    cssP: () => "empty",
  });
});

router.get("/signup", (req, res) => {
  res.render("account/signup", {
    cssP: () => "css",
    navP: () => "nav",
    footerP: () => "footer",
    scriptsP: () => "scripts",
    cssP: () => "empty",
  });
});

module.exports = router;
