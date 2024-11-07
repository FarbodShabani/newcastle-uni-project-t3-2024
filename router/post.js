const express = require('express');
const pagesList = require('../utils/pageList');

const uploadInvoiceController = require('../controller/post')

const router = express.Router();

router.post(`/${pagesList[1]}`, uploadInvoiceController);

module.exports = router;