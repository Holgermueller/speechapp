const EXPRESS = require("express");
const PATH = require("path");

const APP = EXPRESS();

APP.get("*", (req, res) => {
  res.sendFile(PATH.resolve(__dirname, "./client/build", "index.html"));
});

APP.listen((PORT) => {
  console.log(`==> API server now listening on PORT ${PORT}`);
});
