//seed.js

var db = require("./models");

var postsList = [{
    comment : 'OMG WHAT IS THAT SMELL',
    location : 'West Dublin',
    img : {
        userImg : 'String',
        default : 'String',
    },
    date: '05/25/2018',
}, {
    comment : 'Anyone else see the naked guy?',
    location : 'Montgomery',
    img : {
        userImg : 'String',
        default : 'String',
    },
    date: '05/25/2018',
}, {
    comment : 'We can leave comments here?',
    location : 'Embarcadero',
    img : {
        userImg : 'String',
        default : 'String',
    },
    date: '05/25/2018',
}
];

db.Post.remove({}, function(err, posts){
  // code in here runs after all posts are removed
//   db.Post.create(postsList, function(err, posts){
//     // code in here runs after all posts are created
//     if (err) { return console.log('ERROR', err); }
//     console.log("all posts:", posts);
//     console.log("created", posts.length, "posts");
  //});
});

db.Locat.remove({}, function(err, locats){
    // code in here runs after all posts are removed
    // db.Locat.create(stations, function(err, stations){
    //   // code in here runs after all posts are created
    //   if (err) { return console.log('ERROR', err); }
    //   console.log("all posts:", stations);
    //   console.log("created", stations.length, "stations");
      process.exit();
    // });
  });

  var stations = [
    {
        name : '12th St. Oakland City Center',
        coord: {lng:37.803647,lat:-122.271596},
        img: 'location in file system',
    },
    {
        name : '16th St. Mission (SF)',
        coord: {lng:37.765060,lat:-122.419976},
        img: 'location in file system',
    },
    {
        name : '19th St. Oakland',
        coord: {lng:37.809071,lat:-122.268315},
        img: 'location in file system',
    },
    {
        name : '24th St. Mission (SF)',
        coord: {lng:37.752529,lat:-122.418437},
        img: 'location in file system',
    },
    {
        name : 'Antioch',
        coord: {lng:37.995398,lat:-121.780675},
        img: 'location in file system',
    },
    {
        name : 'Ashby (Berkeley)',
        coord: {lng:37.853099,lat:-122.269274},
        img: 'location in file system',
    },
    {
        name : 'Balboa Park (SF)',
        coord: {lng:37.721902,lat:-122.446907},
        img: 'location in file system',
    },
    {
        name : 'Bay Fair (San Leandro)',
        coord: {lng:37.696884,lat:-122.125423},
        img: 'location in file system',
    },
    {
        name : 'Castro Valley',
        coord: {lng:37.692126, lat:-122.074308},
        img: 'location in file system',
    },
    {
        name : 'Civic Center / UN Plaza',
        coord: {lng:37.779968,lat:-122.413774},
        img: 'location in file system',
    },
    {
        name : 'Coliseum',
        coord: {lng:37.753662, lat:-122.196391},
        img: 'location in file system',
    },
    {
        name : 'Colma',
        coord: {lng:37.684971, lat:-122.465193},
        img: 'location in file system',
    },
    {
        name : 'Concord',
        coord: {lng:37.973940, lat:-122.028784},
        img: 'location in file system',
    },
    {
        name : 'Daly City',
        coord: {lng:37.706533, lat:-122.468831},
        img: 'location in file system',
    },
    {
        name : 'Downtown Berkeley',
        coord: {lng:37.870258, lat:-122.267750},
        img: 'location in file system',
    },
    {
        name : 'Dublin / Pleasanton',
        coord: {lng:37.701646, lat:-122.899540},
        img: 'location in file system',
    },
    {
        name : 'El Cerrito del Norte',
        coord: {lng:37.925312,lat:-122.316372},
        img: 'location in file system',
    },
    {
        name : 'El Cerrito Plaza',
        coord: {lng:37.903032,lat:-122.298466},
        img: 'location in file system',
    },
    {
        name : 'Embarcadero (SF)',
        coord: {lng:37.793129, lat:-122.396433},
        img: 'location in file system',
    },
    {
        name : 'Fremont',
        coord: {lng:37.557631, lat:-121.975447},
        img: 'location in file system',
    },
    {
        name : 'Fruitvale (Oakland)',
        coord: {lng:37.774830, lat:-122.224290},
        img: 'location in file system',
    },
    {
        name : 'Glen Park (SF)',
        coord: {lng:37.733249, lat:-122.433487},
        img: 'location in file system',
    },
    {
        name : 'Hayward',
        coord: {lng:37.669746, lat:-122.087042},
        img: 'location in file system',
    },
    {
        name : 'lafayette',
        coord: {lng:37.893366, lat:-122.124158},
        img: 'location in file system',
    },
    {
        name : 'Lake Merritt (Oakland)',
        coord: {lng:37.797183, lat:-122.264614},
        img: 'location in file system',
    },
    {
        name : 'MacArthur (Oakland)',
        coord: {lng:37.829088, lat:-122.267177},
        img: 'location in file system',
    },
    {
        name : 'Millbrae',
        coord: {lng:37.600171, lat:-122.387157},
        img: 'location in file system',
    },
    {
        name : 'Montgomery St. (SF)',
        coord: {lng:37.789557, lat:-122.400825},
        img: 'location in file system',
    },
    {
        name : 'North Berkeley',
        coord: {lng:37.874487,lat:-122.282302},
        img: 'location in file system',
    },
    {
        name : 'North Concord / Martinez',
        coord: {lng:38.003319,lat:-122.024119},
        img: 'location in file system',
    },
    {
        name : 'Oakland International Airport',
        coord: {lng:37.713409,lat:-122.211831},
        img: 'location in file system',
    },
    {
        name : 'Orinda',
        coord: {lng:37.878662,lat:-122.182964},
        img: 'location in file system',
    },
    {
        name : 'Pittsburg / Bay Point',
        coord: {lng:38.019077,lat:-121.944655},
        img: 'location in file system',
    },
    {
        name : 'Pittsburg Center',
        coord: {lng:38.016972,lat:-121.890051},
        img: 'location in file system',
    },
    {
        name : 'Pleasant Hill / Contra Costa Centre',
        coord: {lng:37.928612,lat:-122.055713},
        img: 'location in file system',
    },
    {
        name : 'Powell St. (SF)',
        coord: {lng:37.784689,lat:-122.407525},
        img: 'location in file system',
    },
    {
        name : 'Richmond',
        coord: {lng:37.936859, lat:-122.353956},
        img: 'location in file system',
    },
    {
        name : 'Rockridge (Oakland)',
        coord: {lng:37.844675, lat:-122.251310},
        img: 'location in file system',
    },
    {
        name : 'San Bruno',
        coord: {lng:37.637884,lat:-122.415861},
        img: 'location in file system',
    },
    {
        name : 'San Francisco International Airport',
        coord: {lng:37.616090, lat:-122.392147},
        img: 'location in file system',
    },
    {
        name : 'San Leandro',
        coord: {lng:37.722147,lat:-122.160556},
        img: 'location in file system',
    },
    {
        name : 'South Hayward',
        coord: {lng:37.634522, lat:-122.056933},
        img: 'location in file system',
    },
    {
        name : 'South San Francisco',
        coord: {lng:37.664225,lat:-122.444403},
        img: 'location in file system',
    },
    {
        name : 'Union City',
        coord: {lng:37.590775,lat:-122.016972},
        img: 'location in file system',
    },
    {
        name : 'Walnut Creek',
        coord: {lng:37.905406,lat:-122.066725},
        img: 'location in file system',
    },
    {
        name : 'Warm Springs / South Fremont',
        coord: {lng:37.502396,lat:-121.938597},
        img: 'location in file system',
    },
    {
        name : 'West Dublin / Pleasanton',
        coord: {lng:37.700015,lat:-121.927775},
        img: 'location in file system',
    },
    {
        name : 'West Oakland',
        coord: {lng:37.804823,lat:-122.294691},
        img: 'location in file system',
    },
  ]