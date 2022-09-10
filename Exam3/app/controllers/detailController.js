class DetailController {
  index(req, res, msg) {
    res.render("detail", {
      layout: "blank-layout",
      path: "/detail",
      id: req.query.id,
    });

  }
}

module.exports = new DetailController();
