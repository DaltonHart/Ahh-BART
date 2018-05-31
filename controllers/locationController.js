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

// GET /api/stations/update
function create(req, res) {
  db.Locat.remove({}, function(err, locats){
    console.log('all stations removed');
  db.Locat.create(stations, function(err, stations){
    if (err) { return console.log('ERROR', err); }
    console.log('all stations:', stations);
    console.log('created', stations.length, "stations");
    res.send("All stations updated");
  });
});
  
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

var stations = [
    {
        name : '12th St. Oakland City Center',
        coord: {lng:37.803647,lat:-122.271596},
        img: '/images/Oakland City Center 12th Street.jpg',
    },
    {
        name : '16th St. Mission (SF)',
        coord: {lng:37.765060,lat:-122.419976},
        img: '/images/16th-st-mission-station.jpg',
    },
    {
        name : '19th St. Oakland',
        coord: {lng:37.809071,lat:-122.268315},
        img: '/images/19th-street-Oakland.jpg',
    },
    {
        name : '24th St. Mission (SF)',
        coord: {lng:37.752529,lat:-122.418437},
        img: '/images/24th-street-mission-station.jpg',
    },
    {
        name : 'Antioch',
        coord: {lng:37.995398,lat:-121.780675},
        img: '/images/Antioch.png',
    },
    {
        name : 'Ashby (Berkeley)',
        coord: {lng:37.853099,lat:-122.269274},
        img: '/images/Ashby.png',
    },
    {
        name : 'Balboa Park (SF)',
        coord: {lng:37.721902,lat:-122.446907},
        img: '/images/Balboa Park.jpg',
    },
    {
        name : 'Bay Fair (San Leandro)',
        coord: {lng:37.696884,lat:-122.125423},
        img: '/images/Bay Fair.jpg',
    },
    {
        name : 'Castro Valley',
        coord: {lng:37.692126, lat:-122.074308},
        img: '/images/Castro Valley.jpg',
    },
    {
        name : 'Civic Center / UN Plaza',
        coord: {lng:37.779968,lat:-122.413774},
        img: '/images/Civic Center.jpg',
    },
    {
        name : 'Coliseum',
        coord: {lng:37.753662, lat:-122.196391},
        img: '/images/coliseum-bart_crop.jpg',
    },
    {
        name : 'Colma',
        coord: {lng:37.684971, lat:-122.465193},
        img: '/images/Colma.jpg',
    },
    {
        name : 'Concord',
        coord: {lng:37.973940, lat:-122.028784},
        img: '/images/Concord.jpg',
    },
    {
        name : 'Daly City',
        coord: {lng:37.701828, lat:-122.468831},
        img: '/images/Daly City.jpg',
    },
    {
        name : 'Downtown Berkeley',
        coord: {lng:37.870258, lat:-122.267750},
        img: '/images/Berkeley.jpg',
    },
    {
        name : 'Dublin / Pleasanton',
        coord: {lng:37.701646, lat:-121.898816},
        img: '/images/Dublin Pleasanton.jpg',
    },
    {
        name : 'El Cerrito del Norte',
        coord: {lng:37.925312,lat:-122.316372},
        img: '/images/El Cerrito Del Norte.jpg',
    },
    {
        name : 'El Cerrito Plaza',
        coord: {lng:37.903032,lat:-122.298466},
        img: '/images/El Cerrito Plaza.jpg',
    },
    {
        name : 'Embarcadero (SF)',
        coord: {lng:37.793129, lat:-122.396433},
        img: '/images/Embarcadero.jpg',
    },
    {
        name : 'Fremont',
        coord: {lng:37.557631, lat:-121.975447},
        img: '/images/Fremont.jpg',
    },
    {
        name : 'Fruitvale (Oakland)',
        coord: {lng:37.774830, lat:-122.224290},
        img: '/images/Fruitvale.jpg',
    },
    {
        name : 'Glen Park (SF)',
        coord: {lng:37.733249, lat:-122.433487},
        img: '/images/Glen Park.jpg',
    },
    {
        name : 'Hayward',
        coord: {lng:37.669746, lat:-122.087042},
        img: '/images/Hayward.png',
    },
    {
        name : 'lafayette',
        coord: {lng:37.893366, lat:-122.124158},
        img: '/images/Lafayette.jpg',
    },
    {
        name : 'Lake Merritt (Oakland)',
        coord: {lng:37.797183, lat:-122.264614},
        img: '/images/Lake Merritt.jpg',
    },
    {
        name : 'MacArthur (Oakland)',
        coord: {lng:37.829088, lat:-122.267177},
        img: '/images/Macarthur.jpg',
    },
    {
        name : 'Millbrae',
        coord: {lng:37.600171, lat:-122.387157},
        img: '/images/Millbrae.jpg',
    },
    {
        name : 'Montgomery St. (SF)',
        coord: {lng:37.789557, lat:-122.400825},
        img: '/images/Montgomery.jpg',
    },
    {
        name : 'North Berkeley',
        coord: {lng:37.874487,lat:-122.282302},
        img: '/images/North Berkeley.jpg',
    },
    {
        name : 'North Concord / Martinez',
        coord: {lng:38.003319,lat:-122.024119},
        img: '/images/North Concord Martinez.jpg',
    },
    {
        name : 'Oakland International Airport',
        coord: {lng:37.713409,lat:-122.211831},
        img: '/images/Oakland International Airport.jpg',
    },
    {
        name : 'Orinda',
        coord: {lng:37.878662,lat:-122.182964},
        img: '/images/Orinda.jpg',
    },
    {
        name : 'Pittsburg / Bay Point',
        coord: {lng:38.019077,lat:-121.944655},
        img: '/images/Pittsburg Bay Point.jpg',
    },
    {
        name : 'Pittsburg Center',
        coord: {lng:38.016972,lat:-121.890051},
        img: '/images/Pittsburg Center.png',
    },
    {
        name : 'Pleasant Hill / Contra Costa Centre',
        coord: {lng:37.928612,lat:-122.055713},
        img: '/images/Pleasant Hill Contra Costa Centre.jpg',
    },
    {
        name : 'Powell St. (SF)',
        coord: {lng:37.784689,lat:-122.407525},
        img: '/images/Powell Street.jpg',
    },
    {
        name : 'Richmond',
        coord: {lng:37.936859, lat:-122.353956},
        img: '/images/Richmond.jpg',
    },
    {
        name : 'Rockridge (Oakland)',
        coord: {lng:37.844675, lat:-122.251310},
        img: '/images/Rockridge.gif',
    },
    {
        name : 'San Bruno',
        coord: {lng:37.637884,lat:-122.415861},
        img: '/images/San Bruno.jpg',
    },
    {
        name : 'San Francisco International Airport',
        coord: {lng:37.616090, lat:-122.392147},
        img: '/images/SFO.jpeg',
    },
    {
        name : 'San Leandro',
        coord: {lng:37.722147,lat:-122.160556},
        img: '/images/San Leandro.jpg',
    },
    {
        name : 'South Hayward',
        coord: {lng:37.634522, lat:-122.056933},
        img: '/images/South Hayward.jpg',
    },
    {
        name : 'South San Francisco',
        coord: {lng:37.664225,lat:-122.444403},
        img: '/images/South San Francisco.jpg',
    },
    {
        name : 'Union City',
        coord: {lng:37.590775,lat:-122.016972},
        img: '/images/Union City.jpg',
    },
    {
        name : 'Walnut Creek',
        coord: {lng:37.905406,lat:-122.066725},
        img: '/images/Walnut Creek.jpg',
    },
    {
        name : 'Warm Springs / South Fremont',
        coord: {lng:37.502396,lat:-121.938597},
        img: '/images/Warm Springs South Fremont.jpg',
    },
    {
        name : 'West Dublin / Pleasanton',
        coord: {lng:37.700189,lat:-121.927775},
        img: '/images/West Dublin Pleasanton.jpg',
    },
    {
        name : 'West Oakland',
        coord: {lng:37.804823,lat:-122.294691},
        img: '/images/West Oakland.jpg',
    },
  ]