const express = require("express");
const app = express();
const port = 8080;

const calcRes = require("./calcRes");

//use
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// router
app.get("/", (req, res) => {
  res.redirect("index.html");
});

app.post("/calc", (req, res) => {
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

  res.send(calcRes.html(x, y, opt, result));
});

// static folder
app.use(express.static(__dirname + "/public"));

// App listen on port
app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
