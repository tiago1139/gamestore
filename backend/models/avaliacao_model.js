const mongoose = require('mongoose');


const Schema = mongoose.Schema;



const AvalSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    item: {type: Schema.Types.ObjectId, ref: 'Item'},
    estrelas: {type: Number, default:0},
    comentario: {type: String, maxlength:5000}
  }
);

// Export the schema

module.exports.aval_schema = AvalSchema;
module.exports.aval_model = mongoose.model('Aval', AvalSchema);
