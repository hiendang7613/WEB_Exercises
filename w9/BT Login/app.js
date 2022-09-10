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

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "root",
  port: 5432,
});

//use
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/account", require("./controllers/account.C"));

app.use(async (req, res, next) => {
  const { rows } = await pool.query('SELECT * FROM public."Users"');
  console.log(rows);
  next();
});

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
