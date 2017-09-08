"use strict"

const express = require('express');
const api = require('./routers/api');

const PORT = 3000

const app = express();
app.use('/api', api)
app.get('/', (req, res) => {
  res.status(200).sendfile('./public/index.html')
})
app.listen(PORT, () => {
  console.log('OAuth 2.0 Experiments App listening on:')
  console.log(`http:\\\\localhost:${PORT}`)
})