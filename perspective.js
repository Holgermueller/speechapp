const { response } = require("express");
const { google } = require("googleapis");

API_KEY = "";
DISCOVERY_URL =
  "https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1";

google
  .discoverAPI(DISCOVERY_URL)
  .then((client) => {
    const analyzeRequest = {
      comment: {
        text: "",
      },
      requestedAttributes: {
        TOXICITY: {},
      },
    };

    client.comments.analyze(
      {
        key: API_KEY,
        resource: analyzeRequest,
      },
      (err, response) => {
        if (err) throw err;
        console.log(JSON.stringify(response.data, null, 2));
      }
    );
  })
  .catch((err) => {
    throw err;
  });
