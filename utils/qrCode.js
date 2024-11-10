// Require the package
const QRCode = require('qrcode')





const createQrCode = async (invoiceId) => {


const showUrl = process.env.BASE_URL + `show/?id=${invoiceId}`;

  
// Converting the data into base64 
const qrCode = await QRCode.toDataURL(showUrl);

return qrCode;

}




module.exports = createQrCode;