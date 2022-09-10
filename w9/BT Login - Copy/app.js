const express = require("express"),
  app = express(),
  port = 8080,
  exphbs = require("express-handlebars");

const hbs = exphbs.create({
  defaultLayout: "home",
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

app.use("/account", require("./controllers/account.C"));

// router
app.get("/", (req, res) => {
  res.render("home", {
    cssP: () => "css",
    navP: () => "nav",
    footerP: () => "footer",
    scriptsP: () => "scripts",
    cssP: () => "empty",
  });
});

// App listen on port
app.listen(port, () => {
  console.log(`Example app listen on port ${port}`);
});
