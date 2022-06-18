const express = require('express');
const post_model = require('../models/client');
const route = express.Router();

route.use(express.json());
route.post('/auth', (request, response) => {
    response.status(202).send('OK');
}).post('/');

module.exports = route;