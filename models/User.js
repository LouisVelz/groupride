const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bike_type: {
    type: String
  },
  skill_level: {
    type: String
  },
  social_media: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users', UserSchema);