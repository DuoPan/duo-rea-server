const express = require('express');
const app = express();
const port = 3001;
const actions = require('./actions');
const defaultJsonData = require('./db.json');
let userJsonData = actions.resetProperty(defaultJsonData);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(userJsonData));
});

app.get('/add', (req, res) => {
  let result = {};
  if (req.query.id) {
    result = actions.addProperty(req.query.id, userJsonData);
  } else {
    // wrong params
    result = {message: "Miss query parameter id."}
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result));
});

app.get('/remove', (req, res) => {
  let result = {};
  if (req.query.id) {
    result = actions.removeProperty(req.query.id, userJsonData);
  } else {
    // wrong params
    result = {message: "Miss query parameter id."}
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result));
});

app.get('/reset', (req, res) => {
  userJsonData = actions.resetProperty(defaultJsonData);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(defaultJsonData));
});

app.listen(port, () => {
  console.log(`Thank you for your time.`)
});