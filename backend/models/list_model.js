const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let {item_schema} = require('./item_model')

const ListSchema = new Schema(
  {

    title: {type: String, required: true, maxlength:100},
    items: {type: [item_schema], ref:'Item'},
    privacy: {
      type: String,
      enum: ['Publico', 'Privado']
    }
  }
);

// Export the schema

module.exports.list_schema = ListSchema;
module.exports.list_model = mongoose.model('List', ListSchema);
