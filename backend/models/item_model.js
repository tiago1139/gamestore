var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let {aval_schema} = require('./avaliacao_model')

var ItemSchema = new Schema(
    {
        tipo: {type: String, required:true},
        name: {type: String, required: true},
        descricao: {type: String, required:true, maxlength:1000},
        plataforma: {type: String, required:true},
        idiomas: {type: [String], required:true},
        preco: {type: Number, required:true},
        rating: {type: Number, default:0},
        imagem: {type: String, required:true},
        img_alternativas: {type: [String]},
        link: {type: String}
    }
);

//Export model
module.exports.item_schema = ItemSchema;
module.exports.item_model = mongoose.model('Item', ItemSchema);
