const db = require(`../models`);

// GET /api/post
function index(req, res) {
  db.Post.find()
  .exec(function(err, post) {
    if (err) {
      return console.log("index error: " + err); }
      res.json(post);
    });
  };

// POST /api/post
function create(req, res) {
  // create an post based on request body and send it back as JSON
  var newPost = req.body
  console.log(req.body);
  db.Post.create(newPost, function(err, newPost){
    if(err){res.status(500).json({"ERROR":"Database Error"});}
    res.json(newPost);
  });
}

// controllers/postController.js
module.exports = {
  index: index,
  create: create,
};
