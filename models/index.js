const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Ahh-BART");

module.exports.Post = require('./post.js');
module.exports.Locat = require('./location.js')