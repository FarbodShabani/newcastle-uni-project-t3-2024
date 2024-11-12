
const rawDetails = document.querySelectorAll("input.invoice-detail");
const invoiceDetails = {};


rawDetails.forEach(invoiceDetail => {
  invoiceDetails[`${invoiceDetail.id}`] = invoiceDetail.value;
});




const doc = new PDFDocument();

// pipe the document to a blob
const stream = doc.pipe(blobStream());

// add your content to the document here, as usual


doc.moveUp();
doc.moveUp();
doc.moveUp();
doc.font('Times-Bold').fontSize(16)
 .text(invoiceDetails?.SNID ? invoiceDetails?.SNID : "N/A", {
  align: "center",
  height: 10,

 }).moveDown();

 
doc.moveUp();
 doc.font('Times-Roman').fontSize(12)
 .text(invoiceDetails?.SA ? invoiceDetails?.SA : "N/A",{
  align: "center",
  height: 10,
 }).moveDown();


 doc.moveUp();
 doc.font('Times-Roman').fontSize(12)
 .text(invoiceDetails?.SCN ? invoiceDetails?.SCN : "N/A",{
  align: "center",
  height: 10,
 }).moveDown();
 
doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(invoiceDetails?.SE ? invoiceDetails?.SE : "N/A",{
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
 .text(`e-Invoice Type: ${invoiceDetails?.EIT ? invoiceDetails?.EIT : "N/A"}`,{
  align: "right",
  height: 10,
 }).moveDown();
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Supplier TIN: ${invoiceDetails?.STIN ? invoiceDetails?.STIN : "N/A"}`,{
  align: "left",
  height: 10,
 });
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`e-Invoice version: ${invoiceDetails?.EIV ? invoiceDetails?.EIV : "N/A"}`,{
  align: "right",
  height: 10,
 });

 doc.moveDown();
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Supplier Registration Number: ${invoiceDetails?.SRN ? invoiceDetails?.SRN : "N/A"}`,{
  align: "left",
  height: 10,
 });
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`e-Invoice code: ${invoiceDetails?.EIC ? invoiceDetails?.EIC : "N/A"}`,{
  align: "right",
  height: 10,
 });

 doc.moveDown();   
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Supplier SST ID: ${invoiceDetails?.SSSTN ? invoiceDetails?.SSSTN : "N/A"}`,{
  align: "left",
  height: 10,
 });
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Unique Identifier NO : ${invoiceDetails?.IRBMUN ? invoiceDetails?.IRBMUN : "N/A"}`,{
  align: "right",
  height: 10,
 });

 doc.moveDown();   
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Supplier MISC code: ${invoiceDetails?.SMISC ? invoiceDetails?.SMISC : "N/A"}`,{
  align: "left",
  height: 10,
 });
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Original Invoice Ref NO : ${invoiceDetails?.OEIRN ? invoiceDetails?.OEIRN : "N/A"}`,{
  align: "right",
  height: 10,
 });

 doc.moveDown();   
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Supplier Business activity description: ${invoiceDetails?.SBA ? invoiceDetails?.SBA : "N/A"}`,{
  align: "left",
  height: 10,
 });
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(` Invoice Date and Time : ${invoiceDetails?.EIDAT ? invoiceDetails?.EIDAT : "N/A"}`,{
  align: "right",
  height: 10,
 });

 doc.moveDown();   

 doc.moveTo(70, 180).lineTo(525, 180).stroke();

 
 doc.font('Times-Roman').fontSize(10)
 .text(`Buyer TIN: ${invoiceDetails?.BT ? invoiceDetails?.BT : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();
 
 doc.moveUp();

 doc.font('Times-Roman').fontSize(10)
 .text(`Buyer Name: ${invoiceDetails?.BNID ? invoiceDetails?.BNID : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();

 doc.moveUp();

 doc.font('Times-Roman').fontSize(10)
 .text(`Buyer Identification Number: ${invoiceDetails?.BSRN ? invoiceDetails?.BSRN : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();

 doc.moveUp();

 doc.font('Times-Roman').fontSize(10)
 .text(`Buyer Address: ${invoiceDetails?.BA ? invoiceDetails?.BA : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();

 doc.moveUp();

 doc.font('Times-Roman').fontSize(10)
 .text(`Buyer Contact Number: ${invoiceDetails?.BCN ? invoiceDetails?.BCN : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();

 doc.moveUp();

 doc.font('Times-Roman').fontSize(10)
 .text(`Buyer Email: ${invoiceDetails?.BE ? invoiceDetails?.BE : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();

 
 doc.moveTo(70, 260).lineTo(525, 260).stroke();
 
 doc.font('Times-Roman').fontSize(10)
 .text(`Classification: ${invoiceDetails?.CFI ? invoiceDetails?.CFI : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();

 doc.moveUp();

 doc.font('Times-Roman').fontSize(10)
 .text(`Description: ${invoiceDetails?.DOPOS ? invoiceDetails?.DOPOS : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();
 
 doc.moveUp();

 doc.font('Times-Roman').fontSize(10)
 .text(`Quantity: ${invoiceDetails?.QUAN ? invoiceDetails?.QUAN : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();
 
 doc.moveUp();

 doc.font('Times-Roman').fontSize(10)
 .text(`Unit Price: ${invoiceDetails?.UP ? invoiceDetails?.UP : "N/A"}`,{
  align: "left",
  height: 10,
 }).moveDown();
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Amount: ${invoiceDetails?.QUAN && invoiceDetails?.UP ? invoiceDetails?.QUAN * invoiceDetails?.UP  : "N/A"}`,{
  align: "left",
  height: 10,
 });
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Subtotal: ${invoiceDetails?.SBT ? invoiceDetails?.SBT : "N/A"}`,{
  align: "right",
  height: 10,
 });

 doc.moveDown();
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Disc: ${invoiceDetails?.DA ? invoiceDetails?.DA : "N/A"}`,{
  align: "left",
  height: 10,
 });
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Total excluding tax: ${invoiceDetails?.TET ? invoiceDetails?.TET : "N/A"}`,{
  align: "right",
  height: 10,
 });

 doc.moveDown();
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Tax Rate: ${invoiceDetails?.TR ? invoiceDetails?.TR : "N/A"}`,{
  align: "left",
  height: 10,
 });
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Tax Amount: ${invoiceDetails?.TA ? invoiceDetails?.TA : "N/A"}`,{
  align: "right",
  height: 10,
 });

 doc.moveDown();
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Total Product / Service Price (incl.tax): ${invoiceDetails?.TIT ? invoiceDetails?.TIT : "N/A"}`,{
  align: "left",
  height: 10,
 });
 
 doc.moveUp();
 doc.font('Times-Roman').fontSize(10)
 .text(`Total payable amount: ${invoiceDetails?.PA ? invoiceDetails?.PA : "N/A"}`,{
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
.text(` ${invoiceDetails?.IDS ? invoiceDetails?.IDS : "N/A"}`,{
 align: "left",
 height: 10,
}).moveDown();

doc.moveUp();

doc.font('Times-Roman').fontSize(10)
.text(`Date and Time of validation: ${invoiceDetails?.DATOV ? invoiceDetails?.DATOV : "N/A"}`,{
 align: "left",
 height: 10,
});


doc.end();

const a = document.createElement("a");
document.body.appendChild(a);
a.style = "display: none";

let blob;

function download() {
if (!blob) return;
var url = window.URL.createObjectURL(blob);
a.href = url;
a.download = 'test.pdf';
a.click();
window.URL.revokeObjectURL(url);
}

stream.on("finish", function() {
// get a blob you can do whatever you like with
blob = stream.toBlob("application/pdf");
});


