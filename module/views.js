const viewRoute = require("../router/views")



const renderViews = (app) => {
   app.use(viewRoute);
   return app;
};




module.exports = renderViews;