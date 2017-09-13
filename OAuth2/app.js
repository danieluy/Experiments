"use strict"

const express = require('express');
const api = require('./routers/api');
const path = require('path');

const PORT = 5500

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', api)

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => {
  console.log('OAuth 2.0 Experiments App listening on:')
  console.log(`http://localhost:${PORT}`)
})