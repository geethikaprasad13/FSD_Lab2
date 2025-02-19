const http = require('http');
const express = require('express');
const app = express();
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});
const server = http.createServer(app);
server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});