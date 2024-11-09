const invoice = require("../model/invoice");

const uploadInvoiceController = (req, res) => {
  return res.redirect("./show");
};

const reciveJsonFormInvoice = async (req, res) => {
  const body = req.body;
    
    try {
        

        const newInvoice = new invoice(body);
        await newInvoice.save();
        console.log(newInvoice);
        
        return res.redirect("/show/?id=" + newInvoice._id);            
        } catch (error) {
            console.log(error);
            return res.status(504).json({
                message: "Something went wrong",
              });
        }


};

module.exports = { uploadInvoiceController, reciveJsonFormInvoice };
