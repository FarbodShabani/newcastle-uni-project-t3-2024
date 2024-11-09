const formElements = [
    {
        subGroupName: "Party Details",
        inputsList: [
            {
                name: "Supplier’s Name",
                inputId: "SNID",
            },
            {
                name: "Buyer’s Name",
                inputId: "BNID",
            },
        ]
    },
    {
        subGroupName: "Supplier’s Information",
        inputsList: [
            {
                name: "Supplier’s TIN",
                inputId: "STIN",
            },
            {
                name: "Supplier’s Registration Number",
                inputId: "SRN",
            },
            {
                name: "Supplier’s SST  Number",
                inputId: "SSSTN",
            },
            {
                name: "Supplier’s Tourism Tax Registration Number",
                inputId: "STTRN",
            },
            {
                name: "Supplier’s Email",
                inputId: "SE",
            },
            {
                name: "Supplier’s MSIC Code",
                inputId: "SMC",
            },
            {
                name: "Supplier’s Business Activity",
                inputId: "SBA",
            },
        ]
    },
    {
        subGroupName: "Buyer’s Information",
        inputsList: [
            {
                name: "Buyer’s TIN",
                inputId: "BT",
            },
            {
                name: "Buyer’s Registration Number",
                inputId: "BSRN",
            },
            {
                name: "Buyer’s SST  Number",
                inputId: "BSSTN",
            },
            {
                name: "Buyer’s Email",
                inputId: "BE",
            },
        ]
    },
    {
        subGroupName: "Address Information",
        inputsList: [
            {
                name: "Supplier’s Address",
                inputId: "SA",
            },
            {
                name: "Buyer’s Address",
                inputId: "BA",
            },
        ]
    },
    {
        subGroupName: "Contact  Information",
        inputsList: [
            {
                name: "Supplier’s Contact Number",
                inputId: "SCN",
            },
            {
                name: "Buyer’s Contact Number",
                inputId: "BCN",
            },
        ]
    },
    {
        subGroupName: "Invoice Details",
        inputsList: [
            {
                name: "e-Invoice Version",
                inputId: "EIV",
            },
            {
                name: "e-Invoice Type",
                inputId: "EIT",
            },
            {
                name: "e-Invoice Code",
                inputId: "EIC",
            },
            {
                name: "Original e-Invoice Reference Number",
                inputId: "OEIRN",
            },
            {
                name: "e-Invoice Date and Time",
                inputId: "EIDAT",
            },
            {
                name: "Date and Time of Validation",
                inputId: "DATOV",
            },
            {
                name: "Issuer’s Digital Signature",
                inputId: "IDS",
            },
            {
                name: "Invoice Currency Code",
                inputId: "ICC",
            },
            {
                name: "Currency Exchange Rate",
                inputId: "CER",
            },
            {
                name: "Frequency of Billing",
                inputId: "FOB",
            },
            {
                name: "Billing Period",
                inputId: "BP",
            },
        ]
    },
    {
        subGroupName: "Unique Identification",
        inputsList: [
            {
                name: "IRBM Unique Number",
                inputId: "IRBMUN",
            },
        ]
    },
    {
        subGroupName: "Products/Services Details",
        inputsList: [
            {
                name: "Classification",
                inputId: "CFI",
            },
            {
                name: "Description of Product or Service",
                inputId: "DOPOS",
            },
            {
                name: "Unit Price",
                inputId: "UP",
            },
            {
                name: "Quantity",
                inputId: "QUAN",
            },
            {
                name: "Measurement",
                inputId: "MSR",
            },
            {
                name: "Discount Rate",
                inputId: "DR",
            },
            {
                name: "Discount Amount",
                inputId: "DA",
            },
        ]
    },
    {
        subGroupName: "Tax Exemption Specifics",
        inputsList: [
            {
                name: "Details of Tax Exemption",
                inputId: "DOTE",
            },
            {
                name: "Amount Exempted from Tax",
                inputId: "AEFT",
            },
        ]
    },
    {
        subGroupName: "Total Amounts",
        inputsList: [
            {
                name: "Subtotal",
                inputId: "SBT",
            },
            {
                name: "Total Excluding Tax",
                inputId: "TET",
            },
            {
                name: "Total Including Tax",
                inputId: "TIT",
            },
            {
                name: "Quantity",
                inputId: "TT",
            },
            {
                name: "Tax Rate",
                inputId: "TR",
            },
            {
                name: "Tax Amount",
                inputId: "TA",
            },
        ]
    },
    {
        subGroupName: "Payment Information",
        inputsList: [
            {
                name: "Payment Mode",
                inputId: "PM",
            },
            {
                name: "Supplier’s Bank Account Number",
                inputId: "SBAN",
            },
            {
                name: "Payment Terms",
                inputId: "PT",
            },
            {
                name: "Payment Amount",
                inputId: "PA",
            },
            {
                name: "Payment Date",
                inputId: "PD",
            },
            {
                name: "Payment Reference Number",
                inputId: "PRN",
            },
            {
                name: "Bill Reference Number",
                inputId: "BRN",
            },
        ]
    },
];



module.exports = formElements;