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
            msg: "Incorrect username !!"
          });
        }

        req.logIn(user, async (err) => {
          if (err) {
            return res.render("signin", {
              layout: "blank-layout",
              path: req.originalUrl.split("?").shift(),
              msg: "Incorrect password !!"
            });
          }
          res.cookie("username", user.Username, { signed: true });
          return welcomeController.index(req, res, user.f_Username);
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
