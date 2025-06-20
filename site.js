const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

const templatesDir = path.resolve(__dirname, 'templates');

app.get('/', (req, res) => {
  res.sendFile(path.join(templatesDir, 'home.html'));
});

module.exports = serverless(app);
