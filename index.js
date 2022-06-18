'user strict';
const express = require('express');
const mongoose = require('mongoose');
const client_route = require('./routes/client');
const terrain_route = require('./routes/terrain');

const application = express();
application.use('/client', client_route);
application.use('/terrain', terrain_route);
application.listen(5000);

mongoose.connect('mongodb://localhost:36017/vente_de_terrain', () => {
    console.log('database connection etablished');
});