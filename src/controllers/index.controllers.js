const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    // res.send("Hello Francis");
    // res.render("index", {layout: false});
    res.render("index");
};

indexCtrl.renderAbout = (req, res) => {
    res.render("about");
};

module.exports = indexCtrl;