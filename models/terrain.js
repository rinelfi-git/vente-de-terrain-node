const mongoose = require('mongoose');
const { Schema } = mongoose;

const terrain_schema = new Schema({
    proprietaire: String,
    en_vente: Boolean,
    adresse: String,
    surface: Number,
    prix: Number,
    relief: String,
    apercues: [],
    coordinates: {
        latitude: Number,
        longitude: Number
    },
    geolocated: Boolean
});

module.exports = mongoose.model('terrain', terrain_schema);