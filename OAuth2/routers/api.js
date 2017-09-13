"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const api = express.Router()
const verifyToken = require('../local_modules/GoogleAuth').verifyToken


api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json())

api.post('/googlelogin', (req, res) => {
  const tokenId = req.body.tokenId
  verifyToken(tokenId)
  .then(result => {
    res.status(200).json({ error: null, message: 'Success', data: result })
  })
  .catch(err => {
    console.error(err.stack ? err.stack : err)
    res.status(500).json({ error: 'Error verifing token' })
  })
})

api.options("/*", (req, res, next) => {
  // Support for CORS
  res.header('Access-Control-Allow-Origin', '*');
  // Accepted methods
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Accepted headers
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.status(200);
});

module.exports = api