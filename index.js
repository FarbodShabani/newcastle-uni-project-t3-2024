const express = require('express')
const settingServer = require('./module/setting');
const renderViews = require('./module/views');

const app = express()

settingServer(app);
renderViews(app);

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
