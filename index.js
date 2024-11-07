const express = require('express')
const settingServer = require('./module/setting');
const renderViews = require('./module/views');
const renderPosts = require('./module/post');

const app = express()

settingServer(app);
renderViews(app);
renderPosts(app);

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
