const express = require("express");
const settingServer = require("./module/setting");
const renderViews = require("./module/views");
const renderPosts = require("./module/post");

const app = express();

const runServer = async () => {
  const databaseSuccessfulConnection = await settingServer(app);
  renderViews(app);
  renderPosts(app);

  console.log(databaseSuccessfulConnection);

  databaseSuccessfulConnection &&
    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`)
    );
};

runServer();