const UserModel = require("../models/userModel"),
welcomeController = require("./welcomeController");

const bcrypt = require("bcrypt");
const saltRounds = 10;

class SignupController {
  index(req, res, msg) {
    res.render("signup", {
      layout: "blank-layout",
      path: req.originalUrl.split("?").shift(),
      msg: msg,
    });
  }

  async signup(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let name = req.body.name;
    
    if (!username || !password || !email) return false;

    let user;
    try {
      user = await UserModel.get(username);
    } catch (error) {
      console.error(e, e.stack);
      return false;
    }
    if (user.length>0) {
      return res.render("signup", {
        layout: "blank-layout",
        path: req.originalUrl.split("?").shift(),
        msg: "Existed username !!",
      });
    }

    password = await bcrypt.hash(password, saltRounds);

    try {
      let user = await UserModel.add({
        f_ID : Math.random()*100000,
        f_Username: username,
        f_Password: password,
        f_Name: name,
        f_Email: email,
        f_DOB: new Date(Date.now()).toUTCString(),
        f_Permission : 0,
      });
      return welcomeController.index(req, res);
    } catch (error) {
      console.error(error, error.stack);
      return false;
    }
    return true;
  }
}

module.exports = new SignupController();
