const path = require("path");
// Import the Nodemailer library
const nodemailer = require("nodemailer");

const rootDir = path.dirname(process.mainModule.filename);

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use false for STARTTLS; true for SSL on port 465
  auth: {
    user: process.env.NODEMAILERGMAILUSERNAME,
    pass: process.env.NODEMAILERGMAILPASSWORD,
  },
});

const sendMail = (supplierEmail, buyerEmail, referenceCode) => {
  // Configure the mailoptions object
  const mailOptions = {
    from: "newcastleuniversity@edu.au",
    to: [supplierEmail, buyerEmail],
    subject: "Sending Invoice",
    text:
      "Hi\nThis email sent to you regarding to your request for sending a copy of the invoice to you. The pdf is attach to this email. The pdf has Qrcode that you can use to redirect to our website. You can use `" +
      referenceCode +
      "` in our website to have access to your invoice.\nBest Regards\nTeam No.1",
    attachments: [
      {
        filename: "file.pdf",
        path: path.join(rootDir, "public", "assets", "pdf", "init.pdf"),
        contentType: "application/pdf",
      },
    ],
  };

  // Send the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

module.exports = sendMail;
