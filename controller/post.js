const uploadInvoiceController = (req, res) => {
  return res.redirect("./show");
};

const reciveJsonFormInvoice = (req, res) => {
  const body = req.body;

  console.log(body);

  return res.redirect("/show");
};

module.exports = { uploadInvoiceController, reciveJsonFormInvoice };
