const express = require('express');
const pagesList = require('../utils/pageList');
const {homePageController, uploadPageController, formPageController, findPageController, aboutUsPageController} = require('../controller/views');

const router = express.Router();

router.get(`/${pagesList[0]}`, homePageController);
router.get(`/${pagesList[1]}`, uploadPageController);
router.get(`/${pagesList[2]}`, formPageController);
router.get(`/${pagesList[3]}`, findPageController);
router.get(`/${pagesList[4]}`, aboutUsPageController);
router.get(`/`, homePageController);

module.exports = router;