const express = require("express"),
  app = express(),
  port = 9000,
  session = require("express-session"),
  cookieParser = require("cookie-parser"),
  passport = require("passport"),
  passportJWT = require("passport-jwt"),
  ExtractJwt = passportJWT.ExtractJwt,
  JwtStrategy = passportJWT.Strategy,
  jwtOptions = {},
  jwt = require("jsonwebtoken");



// app use
app.use(express.static(__dirname + "/public2"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "hKQj5LvOzFsEVAzX2dhS7ZToiHDGZ4Rn",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3600 * 12 },
  })
);
app.use(cookieParser("hKQj5LvOzFsEVAzX2dhS7ZToiHDGZ4Rn"));

// config
app.set("views", "./app2/views");
require("./app2/config/templateEngine.config")(app);
require("./app2/middleware/passport")(app);
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "haluuuuuu";
// route
const route = require("./app2/routes");
app.use(route);

// app listen
app.listen(port, () => {
  console.log(`Example app2 listen on port ${port}`);
});
