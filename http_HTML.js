const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/index.html') {
    res.setHeader('Content-Type', 'text/html');
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading file');
      } else {
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
