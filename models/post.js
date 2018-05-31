const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var PostSchema = new Schema({
  comment : String,
  location : String,
  img : String,
  date: String,
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;