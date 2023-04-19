export const nodeIndexContent = `
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello world');
});

server.listen(port, hostname, () => {
  console.log("Server running");
});
`;

export const nodePackageContent = `
{
  "dependencies": {},
  "scripts": {
    "start": "node index.js"
  },
  "main": "index.js",
  "devDependencies": {}
}
`;
