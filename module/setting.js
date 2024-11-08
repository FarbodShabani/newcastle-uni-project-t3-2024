const bodyParser = require('body-parser');
const express = require('express')



const settingServer = (app) => {
  app.set("view engine", "ejs"); // to load ejs file and handle front-end
  app.use(express.static('public')); // to creat dirctory for the files 
                                     // that needs to be shared with front end
                                     
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  return app
};




module.exports = settingServer;