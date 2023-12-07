const express = require("express");
const serializeJavascript = require("serialize-javascript");
const fs = require("fs");
const { renderToString } = require("react-dom/server");
const { default: App } = require("../src/app");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let content = renderToString(<App />);

  fs.readFile("./clientbuild/index.html", "utf-8", (err, data) => {
    const state = { data: "something", nested: { stillnested: "true" } };

    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    let html = data.replace(
      `<div id="root"></div>`,
      `<div id="root">${content}</div>`
    );

    html = html.replace(
      '<script type="application/json" id="__JSS_STATE__">null',
      `<script type="application/json" id="__JSS_STATE__">${serializeJavascript(
        state,
        {
          isJSON: true,
        }
      )}`
    );

    res.send(html);
  });
});

app.use(express.static("./clientbuild"));

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
