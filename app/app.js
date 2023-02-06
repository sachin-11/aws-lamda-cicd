const express = require('express');
const serverless = require('serverless-http')
const app = express();

app.get('/hello', (req, res) => res.send('Hello world from server'))

app.listen(3000, () => console.log('example app listen on port 3000'))


module.exports.handler = serverless(app);