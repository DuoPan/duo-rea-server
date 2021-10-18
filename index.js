const express = require('express');
const app = express();
const port = 3001;

const jsonData = require('./db.json');

app.get('/results', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(jsonData));
});


// add some logs later
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});