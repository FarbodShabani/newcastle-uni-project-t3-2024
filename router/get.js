const express = require("express");
const getInvoice = require("../controller/get");

const router = express.Router();

router.get(`/invoice`, getInvoice);

module.exports = router;
