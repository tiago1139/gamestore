const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let { list_schema } = require('./list_model');
const {item_schema} = require("./item_model");

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String },
  alternativePics: { type: [String] },
  lists: { type: [list_schema], ref: 'List' },
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  wishlist: {type: list_schema, ref: 'List'},
  library: [
      {
        item: {type: item_schema, ref: 'Item'},
        quantidade: {type: Number},
        data: {type: String}
      }
  ],
  profileInfo: {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String }
  }
});


// Export the model
module.exports.user_schema = UserSchema;
module.exports.user_model = mongoose.model('User', UserSchema);
