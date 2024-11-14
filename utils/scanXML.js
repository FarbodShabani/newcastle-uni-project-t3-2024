const fs = require("fs");
const path = require("path");
const { XMLParser } = require("fast-xml-parser");

const options = {
  ignoreAttributes: false,
};

const rootDir = path.dirname(process.mainModule.filename);

const scanXml = async (fileName) => {
  const invoiceData = {
    SNID: null,
    BNID: null,
    STIN: null,
    SRN: null,
    SSSTN: null,
    STTRN: null,
    SE: null,
    SMC: null,
    SBA: null,
    BT: null,
    BSRN: null,
    BRN: null,
    BSSTN: null,
    BE: null,
    SA: null,
    BA: null,
    SCN: null,
    BCN: null,
    EIV: null,
    EIT: null,
    EIC: null,
    OEIRN: null,
    EIDAT: null,
    DATOV: null,
    IDS: null,
    ICC: null,
    CER: null,
    FOB: null,
    BP: null,
    IRBMUN: null,
    CFI: null,
    DOPOS: null,
    UP: null,
    QUAN: null,
    MSR: null,
    DR: null,
    DA: null,
    DOTE: null,
    AEFT: null,
    SBT: null,
    TET: null,
    TIT: null,
    TT: null,
    TR: null,
    TA: null,
    PM: null,
    SBAN: null,
    PT: null,
    PA: null,
    PD: null,
    PRN: null,
  };

  try {
    const xmlDataStr = fs.readFileSync(
      path.join(rootDir, "public", "assets", "invoice", fileName),
      "utf8"
    );
    const parser = new XMLParser(options);
    let jsonObj = parser.parse(xmlDataStr);

    const sPInfo =
      jsonObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"][
        "ram:ApplicableHeaderTradeAgreement"
      ]["ram:SellerTradeParty"];
    const bPInfo =
      jsonObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"][
        "ram:ApplicableHeaderTradeAgreement"
      ]["ram:BuyerTradeParty"];

    console.log(
      jsonObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"][
        "ram:IncludedSupplyChainTradeLineItem"
      ][0]["ram:SpecifiedLineTradeAgreement"]["ram:NetPriceProductTradePrice"][
        "ram:BasisQuantity"
      ]["#text"]
    );
    invoiceData.SNID = sPInfo["ram:Name"];
    invoiceData.SBA = sPInfo["ram:Description"];
    invoiceData.SRN = sPInfo["ram:GlobalID"]["#text"];
    invoiceData.STIN =
      sPInfo["ram:SpecifiedTaxRegistration"]["ram:ID"]["#text"];
    invoiceData.SA =
      sPInfo["ram:PostalTradeAddress"]["ram:LineOne"] +
      " " +
      sPInfo["ram:PostalTradeAddress"]["ram:LineOne"] +
      " " +
      sPInfo["ram:PostalTradeAddress"]["ram:LineTwo"] +
      " " +
      sPInfo["ram:PostalTradeAddress"]["ram:CityName"] +
      " " +
      sPInfo["ram:PostalTradeAddress"]["ram:CountryID"];
    invoiceData.SE = "farbod1999@yahoo.com"; // The XML file must have this field in order we send a copy of invoice with email.
    invoiceData.BNID = bPInfo["ram:Name"];
    invoiceData.BSRN = bPInfo["ram:GlobalID"]["#text"];
    invoiceData.BT = bPInfo["ram:SpecifiedTaxRegistration"]["ram:ID"]["#text"];
    invoiceData.BE = "shabani.farbod@yahoo.com"; // The XML file must have this field in order we send a copy of invoice with email.
    invoiceData.BA =
      bPInfo["ram:PostalTradeAddress"]["ram:LineOne"] +
      " " +
      bPInfo["ram:PostalTradeAddress"]["ram:LineOne"] +
      " " +
      bPInfo["ram:PostalTradeAddress"]["ram:LineTwo"] +
      " " +
      bPInfo["ram:PostalTradeAddress"]["ram:CityName"] +
      " " +
      bPInfo["ram:PostalTradeAddress"]["ram:CountryID"];
    invoiceData.EIV = jsonObj["?xml"]["@_version"];
    invoiceData.EIT =
      jsonObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"][
        "ram:TypeCode"
      ];
    invoiceData.EIC =
      jsonObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"]["ram:ID"];
    invoiceData.EIDAT =
      jsonObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"][
        "ram:IssueDateTime"
      ]["udt:DateTimeString"]["#text"];
    invoiceData.DATOV =
      jsonObj["rsm:CrossIndustryInvoice"]["rsm:ExchangedDocument"][
        "ram:IssueDateTime"
      ]["udt:DateTimeString"]["#text"];
    invoiceData.ICC =
      jsonObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"][
        "ram:ApplicableHeaderTradeSettlement"
      ]["ram:InvoiceCurrencyCode"];
    invoiceData.OEIRN =
      jsonObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"][
        "ram:IncludedSupplyChainTradeLineItem"
      ][0]["ram:SpecifiedLineTradeAgreement"][
        "ram:BuyerOrderReferencedDocument"
      ]["ram:IssuerAssignedID"];
    invoiceData.QUAN = jsonObj["rsm:CrossIndustryInvoice"]["rsm:SupplyChainTradeTransaction"][
        "ram:IncludedSupplyChainTradeLineItem"
      ][0]["ram:SpecifiedLineTradeAgreement"]["ram:NetPriceProductTradePrice"][
        "ram:BasisQuantity"
      ]["#text"]
    return invoiceData;
  } catch (err) {
    console.error(err);
  }
};

module.exports = scanXml;
