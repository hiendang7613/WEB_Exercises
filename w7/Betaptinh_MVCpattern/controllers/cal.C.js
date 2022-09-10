const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("cal", {
    layout: "calLayout",
    opt: "+",
  });
});

router.post("/", function (req, res) {
  console.log("POST cal:", req.body);
  const x = parseInt(req.body.x);
  const y = parseInt(req.body.y);
  const opt = req.body.opt;

  let result = 0;
  switch (opt) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
  }

  res.render("cal", {
    layout: "calLayout",
    result: result,
    opt: opt,
    x: x,
    y: y,
  });
});

module.exports = router;
