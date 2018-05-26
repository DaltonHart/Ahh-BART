const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//models/album.js
var PostSchema = new Schema({
  comment : String,
  location : String,
  img : {
      userImg : String,
      default : String,
  },
  date: String,
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;