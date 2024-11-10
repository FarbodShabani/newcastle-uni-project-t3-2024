const express = require("express");
const pagesList = require("../utils/pageList");

const {
  uploadInvoiceController,
  reciveJsonFormInvoice,
  showingInvoicing,
} = require("../controller/post");

const router = express.Router();

router.post(`/${pagesList[1]}`, uploadInvoiceController);

router.post(`/${pagesList[2]}`, reciveJsonFormInvoice);

router.post(`/${pagesList[5]}`, showingInvoicing);

module.exports = router;
