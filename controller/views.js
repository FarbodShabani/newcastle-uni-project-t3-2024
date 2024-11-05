const pagesList = require("../utils/pageList");




const homePageController = (req, res) => res.render(pagesList[0], {
    pagesList,
    activePage: pagesList[0]
});

const uploadPageController = (req, res) => res.render(pagesList[1], {
    pagesList,
    activePage: pagesList[1]
});

const formPageController = (req, res) => res.render(pagesList[2], {
    pagesList,
    activePage: pagesList[2]
});

const findPageController = (req, res) => res.render(pagesList[3], {
    pagesList,
    activePage: pagesList[3]
});

const aboutUsPageController = (req, res) => res.render(pagesList[4], {
    pagesList,
    activePage: pagesList[4]
});




module.exports = {homePageController, aboutUsPageController, uploadPageController, findPageController, formPageController};