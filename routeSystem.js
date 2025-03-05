const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/home') {
        res.end('<h1>Welcome to Home</h1>');
    }
    else if (req.url === '/about') {
        res.end('<h1>About Us</h1>');
    }
    else if (req.url === '/contact') {
        res.end('<h1>Contact Us</h1>');
    }
    else {
        res.end('<h1>404 Not Found</h1>');
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});