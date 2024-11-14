const Invoice = require("../model/invoice");
const pagesList = require("../utils/pageList");
const showOptions = require("../utils/show");

const getInvoice = async (req, res) => {
    
    const fetchInvoice = await Invoice.findById(req.query.invoice);
    let invoiceDetails = [];
    for(let field in fetchInvoice) {
        
        invoiceDetails.push({
            id: field,
            value: fetchInvoice[field],
        });
    }
    
    
  return res.redirect(`/${pagesList[5]}/?id=` + req.query.invoice);
}


module.exports = getInvoice;