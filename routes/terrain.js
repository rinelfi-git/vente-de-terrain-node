const express = require('express');
const terrain_model = require('../models/terrain');
const route = express.Router();

route.use(express.json());
route.get('/', async (request, response) => {
    response.status(200).send(await terrain_model.find().select({ __v: 0 }));
}).get('/:id', async (request, response) => {
    response.status(200).send(await terrain_model.findById(request.params['id']).select({ __v: 0 }));
}).put('/', (request, response) => {
    const new_terrain = new terrain_model(request.body);
    new_terrain.save().then(data => {
        response.status(201).json({success: true, content: data});
    }).catch(error => {
        response.status(300).json({success: false, content: error});
    });
}).patch('/:id', (request, response) => {
    terrain_model.updateOne({ _id: request.params['id'] }, { $set: request.body }).then(data => {
        response.status(200).json({success: true, content: data});
    }).catch(error => {
        response.status(300).json({success: false, content: error});
    });
}).delete('/:id', (request, response) => {
    terrain_model.updateOne({ _id: request.params['id'] }, { $set: request.body }).then(data => {
        response.status(200).json({success: true, content: data});
    }).catch(error => {
        response.status(300).json({success: false, content: error});
    });
});

module.exports = route;