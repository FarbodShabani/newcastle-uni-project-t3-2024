const getRouter = require("../router/get")



const renderGet = (app) => {
   app.use(getRouter);
   return app;
};




module.exports = renderGet;