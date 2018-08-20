const mongoose = require('mongoose');
const { Schema } = mongoose;

// new table
const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema);
