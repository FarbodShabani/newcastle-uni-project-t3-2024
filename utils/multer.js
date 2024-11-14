const path = require("path");
const multer  = require('multer');


const rootDir = path.dirname(process.mainModule.filename);



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(rootDir,"public", "assets", "invoice"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })




  module.exports = upload;