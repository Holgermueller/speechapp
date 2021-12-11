const EXPRESS = require("express");
const PATH = require("path");
const MORGAN = require("morgan");

const APP = EXPRESS();
const PORT = process.env.PORT || 8081;

APP.use(MORGAN("dev"));

APP.get("*", (req, res) => {
  res.sendFile(PATH.resolve(__dirname, "./client/build", "index.html"));
});

APP.listen(PORT, () => {
  console.log(`==> API server now listening on PORT ${PORT}`);
});
