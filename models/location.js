const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//models/album.js
var LocationSchema = new Schema({
  name : String,
  coord : String,
  img : String,
});

var Locat = mongoose.model('Locat', LocationSchema);

module.exports = Locat;