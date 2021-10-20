const express = require('express');
const app = express();
const port = 3001;
const defaultJsonData = require('./db.json');
let userJsonData = defaultJsonData;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(defaultJsonData));
});

const addProperty = (id) => {
  let propertyInResults = userJsonData.results.find(x => x.id === id);
  // wrong id
  if (!propertyInResults) {
    return {message: 'Sorry, we can not find this property.'};
  }

  let propertyInSaved = userJsonData.saved.find(x => x.id === id);
  // already added
  if (propertyInSaved) {
    return {message: 'You have already saved this property.'};
  }
  
  userJsonData.saved.push(propertyInResults);
  return {data: userJsonData.saved};
};

app.get('/add', (req, res) => {
  let result = {};
  if (req.query.id) {
    result = addProperty(req.query.id);
  } else {
    // wrong params
    result = {message: "Miss query parameter id."}
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result));
});

const removeProperty = (id) => {
  userJsonData.saved = userJsonData.saved.filter(x => x.id !== id);
  return {data: userJsonData.saved};
};

app.get('/remove', (req, res) => {
  let result = {};
  if (req.query.id) {
    result = removeProperty(req.query.id);
  } else {
    // wrong params
    result = {message: "Miss query parameter id."}
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result));
});

// todo 
app.get('/reset', (req, res) => {
  console.log('jin')
  userJsonData = defaultJsonData;
  console.log(userJsonData)

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(userJsonData));
});

// add some logs later
app.listen(port, () => {
  console.log(`Thank you for your time.`)
});