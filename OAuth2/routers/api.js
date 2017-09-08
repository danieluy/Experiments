"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const api = express.Router()


api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json())

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