const express = require("express"),
  app = express(),
  port = 8080,
  exphbs = require("express-handlebars");

const hbs = exphbs.create({
  defaultLayout: "mainLayout",
  extname: "hbs",
  helpers: {
    ifStr(s1, s2) {
      return s1 == s2;
    },
  },
  layoutsDir: "views/layouts",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

// static folder
app.use(express.static(__dirname + "/public"));

//use
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/user", require("./controllers/user.C.js"));

// router
app.get("/", (req, res) => {
  res.render("home", {
    layout: "mainLayout",
    opt: "+",
  });
});

// App listen on port
app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
