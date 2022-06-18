const mongoose = require('mongoose');
const { Schema } = mongoose;

const client_schema = new Schema({
    cin: {
        required: true,
        type: String
    },
    nom: {
        required: true,
        type: String,
    },
    prenom: String,
    photo: {
        type: String,
        default: 'default.png'
    },
    adresse: {
        code_postal: {
            required: true,
            type: Number
        },
        ville: {
            required: true,
            type: String
        },
        lot: String
    },
    telephones: [String],
    terrains: [String]
});
client_schema.query.select_all = function(){
    this.find().select({__v: 0});
    return this;
};
module.exports = mongoose.model('client', client_schema);