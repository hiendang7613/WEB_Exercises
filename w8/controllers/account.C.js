const router = require("express").Router();

router.get("/signin", (req, res) => {
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
