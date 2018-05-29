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
  // send back all posts as JSON

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

// GET /api/post/:postId
function show(req, res) {
  // find one post by id and send it back as JSON
}

// DELETE /api/post/:postId
function destroy(req, res) {
  // find one post by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/post/:postId
function update(req, res) {
  // find one post by id, update it based on request body,
  // and send it back as JSON
}

// controllers/postController.js
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
