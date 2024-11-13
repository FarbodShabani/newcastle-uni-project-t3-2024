
const Invoice = require("../model/invoice");
const pagesList = require("../utils/pageList");
const createPDF = require("../utils/PDF");
const sendMail = require("../utils/sendEmail");
const showOptions = require("../utils/show");

const uploadInvoiceController = (req, res) => {
  return res.redirect(`./${pagesList[5]}`);
};

const reciveJsonFormInvoice = async (req, res) => {
  const body = req.body;

  try {
    const newInvoice = new Invoice(body);
    await newInvoice.save();
    return res.redirect(`/${pagesList[5]}/?id=` + newInvoice._id);
  } catch (error) {
    console.log(error);
    return res.status(504).json({
      message: "Something went wrong",
    });
  }
};

const showingInvoicing = async (req, res) => {

  const {showOption, invoiceId} = req.body;

  try {

    console.log("invoiceID: ", invoiceId);
    const invoice = await Invoice.findById(invoiceId)
    const {SE, BE, SNID, BNID} = invoice;
    console.log(SE, BE);
    
    
    switch (showOption) {
      case showOptions[0]:
          await createPDF(invoice); 
          await sendMail(SE, BE);
        return res.json(showOption);
        break;
        case showOptions[1]: 
      default:
      return res.json(invoice);
        break;
    }

  } catch (error) {
    console.log(error);
    return res.status(504).json({
      message: "Something went wrong",
    });
  }

}

module.exports = { uploadInvoiceController, reciveJsonFormInvoice, showingInvoicing };
