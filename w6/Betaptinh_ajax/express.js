const express = require("express");
const app = express();
const port = 8080;

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
  console.log("POST calc:", req.body);
  const jsonReq = req.body;
  const x = parseInt(jsonReq["x"]);
  const y = parseInt(jsonReq["y"]);
  const opt = jsonReq["opt"];

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

  res.send(result.toString());
});

// static folder
app.use(express.static(__dirname + "/public"));

// App listen on port
app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
