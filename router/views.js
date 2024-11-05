const express = require('express');
const pagesList = require('../utils/pageList');
const {homePageController} = require('../controller/views');

const router = express.Router();

router.get(`/${pagesList[0]}`, homePageController);

module.exports = router;