const express = require('express');
const app = express();
app.get('/greet', (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(`<h1>Hello, ${name}!</h1>`);
  } else {
    res.send('<h1>Please provide a name in the query parameters, e.g., ?name=John</h1>');
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});