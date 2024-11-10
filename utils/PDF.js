const path = require("path");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const createQrCode = require("./qrCode");

const rootDir = path.dirname(process.mainModule.filename);
const createPDF = async (data, res) => {
  // Create a document
  const doc = new PDFDocument({size: 'A4'});

  doc.pipe(fs.createWriteStream(path.join(rootDir, "public","assets", "pdf", "init.pdf")));

  doc.moveUp();
  doc.moveUp();
  doc.moveUp();
  doc.font('Times-Bold').fontSize(16)
   .text(data?.SNID ? data?.SNID : "N/A", {
    align: "center",
    height: 10,

   }).moveDown();

   
  doc.moveUp();
   doc.font('Times-Roman').fontSize(12)
   .text(data?.SA ? data?.SA : "N/A",{
    align: "center",
    height: 10,
   }).moveDown();
   
  doc.moveUp();
   doc.font('Times-Roman').fontSize(12)
   .text(data?.SCN ? data?.SCN : "N/A",{
    align: "center",
    height: 10,
   }).moveDown();
   
  doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(data?.SE ? data?.SE : "N/A",{
    align: "center",
    height: 10,
    link:"shabani.farbod@yahoo.com "
   }).moveDown();
   
   doc.font('Times-Roman').fontSize(10)
   .text('E-INVOICE',{
    align: "right",
    height: 10,
   }).moveDown();
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`e-Invoice Type: ${data?.EIT ? data?.EIT : "N/A"}`,{
    align: "right",
    height: 10,
   }).moveDown();
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Supplier TIN: ${data?.STIN ? data?.STIN : "N/A"}`,{
    align: "left",
    height: 10,
   });
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`e-Invoice version: ${data?.EIV ? data?.EIV : "N/A"}`,{
    align: "right",
    height: 10,
   });

   doc.moveDown();
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Supplier Registration Number: ${data?.SRN ? data?.SRN : "N/A"}`,{
    align: "left",
    height: 10,
   });
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`e-Invoice code: ${data?.EIC ? data?.EIC : "N/A"}`,{
    align: "right",
    height: 10,
   });

   doc.moveDown();   
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Supplier SST ID: ${data?.SSSTN ? data?.SSSTN : "N/A"}`,{
    align: "left",
    height: 10,
   });
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Unique Identifier NO : ${data?.IRBMUN ? data?.IRBMUN : "N/A"}`,{
    align: "right",
    height: 10,
   });

   doc.moveDown();   
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Supplier MISC code: ${data?.SMISC ? data?.SMISC : "N/A"}`,{
    align: "left",
    height: 10,
   });
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Original Invoice Ref NO : ${data?.OEIRN ? data?.OEIRN : "N/A"}`,{
    align: "right",
    height: 10,
   });

   doc.moveDown();   
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Supplier Business activity description: ${data?.SBA ? data?.SBA : "N/A"}`,{
    align: "left",
    height: 10,
   });
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(` Invoice Date and Time : ${data?.EIDAT ? data?.EIDAT : "N/A"}`,{
    align: "right",
    height: 10,
   });

   doc.moveDown();   

   doc.moveTo(70, 180).lineTo(525, 180).stroke();

   
   doc.font('Times-Roman').fontSize(10)
   .text(`Buyer TIN: ${data?.BT ? data?.BT : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();
   
   doc.moveUp();

   doc.font('Times-Roman').fontSize(10)
   .text(`Buyer Name: ${data?.BNID ? data?.BNID : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();

   doc.moveUp();

   doc.font('Times-Roman').fontSize(10)
   .text(`Buyer Identification Number: ${data?.BSRN ? data?.BSRN : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();

   doc.moveUp();

   doc.font('Times-Roman').fontSize(10)
   .text(`Buyer Address: ${data?.BA ? data?.BA : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();

   doc.moveUp();

   doc.font('Times-Roman').fontSize(10)
   .text(`Buyer Contact Number: ${data?.BCN ? data?.BCN : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();

   doc.moveUp();

   doc.font('Times-Roman').fontSize(10)
   .text(`Buyer Email: ${data?.BE ? data?.BE : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();

   
   doc.moveTo(70, 260).lineTo(525, 260).stroke();
   
   doc.font('Times-Roman').fontSize(10)
   .text(`Classification: ${data?.CFI ? data?.CFI : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();

   doc.moveUp();

   doc.font('Times-Roman').fontSize(10)
   .text(`Description: ${data?.DOPOS ? data?.DOPOS : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();
   
   doc.moveUp();

   doc.font('Times-Roman').fontSize(10)
   .text(`Quantity: ${data?.QUAN ? data?.QUAN : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();
   
   doc.moveUp();

   doc.font('Times-Roman').fontSize(10)
   .text(`Unit Price: ${data?.UP ? data?.UP : "N/A"}`,{
    align: "left",
    height: 10,
   }).moveDown();
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Amount: ${data?.QUAN && data?.UP ? data?.QUAN * data?.UP  : "N/A"}`,{
    align: "left",
    height: 10,
   });
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Subtotal: ${data?.SBT ? data?.SBT : "N/A"}`,{
    align: "right",
    height: 10,
   });

   doc.moveDown();
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Disc: ${data?.DA ? data?.DA : "N/A"}`,{
    align: "left",
    height: 10,
   });
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Total excluding tax: ${data?.TET ? data?.TET : "N/A"}`,{
    align: "right",
    height: 10,
   });

   doc.moveDown();
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Tax Rate: ${data?.TR ? data?.TR : "N/A"}`,{
    align: "left",
    height: 10,
   });
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Tax Amount: ${data?.TA ? data?.TA : "N/A"}`,{
    align: "right",
    height: 10,
   });

   doc.moveDown();
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Total Product / Service Price (incl.tax): ${data?.TIT ? data?.TIT : "N/A"}`,{
    align: "left",
    height: 10,
   });
   
   doc.moveUp();
   doc.font('Times-Roman').fontSize(10)
   .text(`Total payable amount: ${data?.PA ? data?.PA : "N/A"}`,{
    align: "right",
    height: 10,
   });

   doc.moveDown();

   
  doc.moveTo(70, 360).lineTo(525, 360).stroke();
  
  doc.font('Times-Roman').fontSize(10)
  .text(`Digital Signature:`,{
   align: "left",
   height: 10,
  }).moveDown();
  
  doc.moveUp();

  doc.font('Times-Roman').fontSize(10)
  .text(` ${data?.IDS ? data?.IDS : "N/A"}`,{
   align: "left",
   height: 10,
  }).moveDown();

  doc.moveUp();

  doc.font('Times-Roman').fontSize(10)
  .text(`Date and Time of validation: ${data?.DATOV ? data?.DATOV : "N/A"}`,{
   align: "left",
   height: 10,
  });

  doc.moveUp();
  const qrCode = await createQrCode(data._id);

  doc.image(qrCode, 480 , 365 , {width: 50});


  doc.end();
};

module.exports = createPDF;
