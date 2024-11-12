// Require the package
const path = require("path");
const QRCode = require('qrcode')




const rootDir = path.dirname(process.mainModule.filename);

const createQrCode = async (invoiceId) => {


const showUrl = process.env.BASE_URL + `show/?id=${invoiceId}`;

  
// Converting the data into base64 
const qrCode = await QRCode.toDataURL(showUrl);
QRCode.toFile(path.join(rootDir, "public","assets", "pdf", "qrCode.png"), 'Some text',  function (err) {
    if (err) throw err
    console.log('done')
  })

return qrCode;

}




module.exports = createQrCode;