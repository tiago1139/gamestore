const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    default: '',
  },
  profilePicture: {
    type: String,
    default: '',
  },
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
