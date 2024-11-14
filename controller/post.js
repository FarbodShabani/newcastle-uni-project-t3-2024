
const Invoice = require("../model/invoice");
const pagesList = require("../utils/pageList");
const createPDF = require("../utils/PDF");
const scanXml = require("../utils/scanXML");
const sendMail = require("../utils/sendEmail");
const showOptions = require("../utils/show");

const uploadInvoiceController = async (req, res) => {
  const fileName = req?.file?.originalname;
  const extractInvoiceData = await scanXml(fileName);
  const newInvoice = new Invoice(extractInvoiceData);
  await newInvoice.save();
  return res.json(extractInvoiceData);
  return res.redirect(`/${pagesList[5]}/?id=` + newInvoice._id);
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

    const invoice = await Invoice.findById(invoiceId)
    const {SE, BE} = invoice;
    console.log(SE, BE);
    
    
    switch (showOption) {
      case showOptions[0]:
          await createPDF(invoice); 
          await sendMail(SE, BE, invoiceId);
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
