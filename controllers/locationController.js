const db = require(`../models`);


// GET /api/stations
function index(req, res) {
  db.Locat.find()
  .exec(function(err, location) {
    if (err) {
      return console.log("index error: " + err); }
      res.json(location);
    });
  };
  // send back all stations as JSON

// POST /api/stations
function create(req, res) {
  // create a station based on request body and send it back as JSON
}

// GET /api/stations/:stationId
function show(req, res) {
  // find one station by id and send it back as JSON
}

// DELETE /api/stations/:stationId
function destroy(req, res) {
  // find one station by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/stations/:stationId
function update(req, res) {
  // find one station by id, update it based on request body,
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
