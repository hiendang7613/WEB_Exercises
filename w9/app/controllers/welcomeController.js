class WelcomeController {
  index(req, res, msg ) {
    res.render("welcome", {
      layout: "anonymous-layout",
      path: "/welcome",
      usertype : msg
    });
  }
}
module.exports = new WelcomeController();
