const express = require('express');
const app = express();
const port = 3001;
const jsonData = require('./db.json');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/results', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(jsonData));
});


// add some logs later
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});