const bodyParser = require('body-parser');
const express = require('express');
const  mongoose = require('mongoose');



const settingServer = async (app) => {
  app.set("view engine", "ejs"); // to load ejs file and handle front-end
  app.use(express.static('public')); // to creat dirctory for the files 
                                     // that needs to be shared with front end
                                     
  app.use(bodyParser.json());// for receiving json files
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  try {
    await mongoose.connect(process.env.DATABASECONNECTION);
    
    return true;
  } catch (error) {
    return false;
  }
};




module.exports = settingServer;