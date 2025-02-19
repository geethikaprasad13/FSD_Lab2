const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.get('/api/data', (req, res) => {
  const filePath = path.join(__dirname, 'data.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.json({ error: 'Failed to read data file' });
    } else {
        const jsonData = JSON.parse(data); 
        res.json(jsonData);    
    }
  });
});
const server = http.createServer(app);
server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});