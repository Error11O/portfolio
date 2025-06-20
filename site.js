const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

const templatesDir = path.join(__dirname, '..', 'templates');

app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.join(templatesDir, 'home.html'));
});

module.exports.handler = serverless(app);
