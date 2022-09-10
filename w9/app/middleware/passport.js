const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const saltRounds = 10;

module.exports = (app) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      let user;
      try {
        user = await userModel.get(username);
        if (!user) {
          return done(null, false, { message: "Incorrect username !!" });
        }
        const challengeResult = await bcrypt.compare(password, user[0].f_Password);
        if (!challengeResult) {
          return done(null, false, { message: "Incorrect password !!" });
        }
        return done(null, user[0]);
      } catch (error) {
        done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser(async (user, done) => {

    try {
      const u = await userModel.get(user.f_Username);
      done(null, u);
    } catch (error) {
      done(new Error(error), null);
    }
  });

  app.use(passport.initialize());
  app.use(passport.session());
};
