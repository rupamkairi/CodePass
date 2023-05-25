export const expressIndexContent = `
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Express app started.");
});
`;

export const expressPackageContent = `
{
  "dependencies": {
    "express": "latest"
  },
  "scripts": {
    "start": "node index.js"
  },
  "main": "index.js",
  "devDependencies": {}
}
`;
