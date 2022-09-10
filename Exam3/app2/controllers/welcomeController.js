class WelcomeController {
  index(req, res, msg ) {
    res.render("welcome", {
      layout: "anonymous-layout",
      path: "/welcome",
      usertype : msg,
      
        people: [
          { firstname: "Nils" },
          { firstname: "Yehuda" },
        ],
        prefix: "Hello",
      
    });
  }
}
module.exports = new WelcomeController();
