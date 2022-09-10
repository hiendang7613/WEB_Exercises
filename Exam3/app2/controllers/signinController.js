// const User = require("../models/userModel");
const passport = require("passport"),
  welcomeController = require("./welcomeController");

const bcrypt = require("bcrypt");

class SigninController {
  index(req, res, msg) {
    res.render("signin", {
      layout: "blank-layout",
      path: req.originalUrl.split("?").shift(),
      msg: req.msg,
    });
  }

  async signin(req, res, next) {
    passport.authenticate(
      "local",
      function (err, user, info) {
        if (err && !user) {
          return res.render("signin", {
            layout: "blank-layout",
            path: req.originalUrl.split("?").shift(),
            msg: "Incorrect username !!",
          });
        }

        req.logIn(user, async (err) => {
          if (err) {
            return res.render("signin", {
              layout: "blank-layout",
              path: req.originalUrl.split("?").shift(),
              msg: "Incorrect password !!",
            });
          }

          if (req.body.keep === "on") {
            res.cookie("username", user.Username, { signed: true });
          }

          return res.render("signin", {
            layout: "blank-layout",
            path: req.originalUrl.split("?").shift(),
            msg: "Đăng nhập thành công !!",
          });
        });
      }

      // {
      //   successRedirect: '/loggedin',
      //   failureRedirect: '/login', // see text
      //   failureFlash: true // optional, see text as well
      // }
    )(req, res, next);
  }
}

module.exports = new SigninController();
