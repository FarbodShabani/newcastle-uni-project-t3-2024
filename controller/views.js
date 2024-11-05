const pagesList = require("../utils/pageList");




const homePageController = (req, res) => res.render(pagesList[0], {
    pagesList,
    activePage: pagesList[0]
});




module.exports = {homePageController};