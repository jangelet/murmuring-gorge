const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//creates new collection called users using userSchema for Schema
//checks if already exists everytime server is run -- won't overwrite
mongoose.model('users', userSchema);
