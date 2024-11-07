const postRoute = require("../router/post")



const renderPosts = (app) => {
   app.use(postRoute);
   return app;
};




module.exports = renderPosts;