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
}, {

}];

db.Post.remove({}, function(err, posts){
  // code in here runs after all posts are removed
  db.Post.create(postsList, function(err, posts){
    // code in here runs after all posts are created
    if (err) { return console.log('ERROR', err); }
    console.log("all posts:", posts);
    console.log("created", posts.length, "posts");
  });
});

db.Locat.remove({}, function(err, locats){
    // code in here runs after all posts are removed
    db.Locat.create(stations, function(err, stations){
      // code in here runs after all posts are created
      if (err) { return console.log('ERROR', err); }
      console.log("all posts:", stations);
      console.log("created", stations.length, "stations");
      process.exit();
    });
  });

  var stations = [
    {
        name : '12th St. Oakland City Center',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : '16th St. Mission (SF)',
        coord: '37.765060,-122.419976',
        img: 'location in file system',
    },
    {
        name : '19th St. Oakland',
        coord: '37.809071,-122.268315',
        img: 'location in file system',
    },
    {
        name : '24th St. Mission (SF)',
        coord: '37.752529,-122.418437',
        img: 'location in file system',
    },
    {
        name : 'Antioch',
        coord: '37.995398,-121.780675',
        img: 'location in file system',
    },
    {
        name : 'Ashby (Berkeley)',
        coord: '37.853099,-122.269274',
        img: 'location in file system',
    },
    {
        name : 'Balboa Park (SF)',
        coord: '37.721902,-122.446907',
        img: 'location in file system',
    },
    {
        name : 'Bay Fair (San Leandro)',
        coord: '37.696884,-122.125423',
        img: 'location in file system',
    },
    {
        name : 'Castro Valley',
        coord: '37.692126,-122.074308',
        img: 'location in file system',
    },
    {
        name : 'Civic Center / UN Plaza',
        coord: '37.779968,-122.413774',
        img: 'location in file system',
    },
    {
        name : 'Coliseum',
        coord: '37.753662,-122.196391',
        img: 'location in file system',
    },
    {
        name : 'Colma',
        coord: '37.684971,-122.465193',
        img: 'location in file system',
    },
    {
        name : 'Concord',
        coord: '37.973940,-122.028784',
        img: 'location in file system',
    },
    {
        name : 'Daly City',
        coord: '37.706533,-122.468831',
        img: 'location in file system',
    },
    {
        name : 'Downtown Berkeley',
        coord: '37.870258,-122.267750',
        img: 'location in file system',
    },
    {
        name : 'Dublin / Pleasanton',
        coord: '37.701646,-122.899540',
        img: 'location in file system',
    },
    {
        name : 'El Cerrito del Norte',
        coord: '37.925312,-122.316372',
        img: 'location in file system',
    },
    {
        name : 'El Cerrito Plaza',
        coord: '37.903032,-122.298466',
        img: 'location in file system',
    },
    {
        name : 'Embarcadero (SF)',
        coord: '37.793129,-122.396433',
        img: 'location in file system',
    },
    {
        name : 'Fremont',
        coord: '37.557631,-121.975447',
        img: 'location in file system',
    },
    {
        name : 'Fruitvale (Oakland)',
        coord: '37.774830,-122.224290',
        img: 'location in file system',
    },
    {
        name : 'Glen Park (SF)',
        coord: '37.733249,-122.433487',
        img: 'location in file system',
    },
    {
        name : 'Hayward',
        coord: '37.669746,-122.087042',
        img: 'location in file system',
    },
    {
        name : 'lafayette',
        coord: '37.893366,-122.124158',
        img: 'location in file system',
    },
    {
        name : 'Lake Merritt (Oakland)',
        coord: '37.797183,-122.264614',
        img: 'location in file system',
    },
    {
        name : 'MacArthur (Oakland)',
        coord: '37.829088,-122.267177',
        img: 'location in file system',
    },
    {
        name : 'Millbrae',
        coord: '37.600171,-122.387157',
        img: 'location in file system',
    },
    {
        name : 'Montgomery St. (SF)',
        coord: '37.789557,-122.400825',
        img: 'location in file system',
    },
    {
        name : 'North Berkeley',
        coord: '37.874487,-122.282302',
        img: 'location in file system',
    },
    {
        name : 'North Concord / Martinez',
        coord: '38.003319,-122.024119',
        img: 'location in file system',
    },
    {
        name : 'Oakland International Airport',
        coord: '37.713409,-122.211831',
        img: 'location in file system',
    },
    {
        name : 'Orinda',
        coord: '37.878662,-122.182964',
        img: 'location in file system',
    },
    {
        name : 'Pittsburg / Bay Point',
        coord: '38.019077,-121.944655',
        img: 'location in file system',
    },
    {
        name : 'Pittsburg Center',
        coord: '38.016972,-121.890051',
        img: 'location in file system',
    },
    {
        name : 'Pleasant Hill / Contra Costa Centre',
        coord: '37.928612,-122.055713',
        img: 'location in file system',
    },
    {
        name : 'Powell St. (SF)',
        coord: '37.784689,-122.407525',
        img: 'location in file system',
    },
    {
        name : 'Richmond',
        coord: '37.936859,-122.353956',
        img: 'location in file system',
    },
    {
        name : 'Rockridge (Oakland)',
        coord: '37.844675,-122.251310',
        img: 'location in file system',
    },
    {
        name : 'San Bruno',
        coord: '37.637884,-122.415861',
        img: 'location in file system',
    },
    {
        name : 'San Francisco International Airport',
        coord: '37.616090,-122.392147',
        img: 'location in file system',
    },
    {
        name : 'San Leandro',
        coord: '37.722147,-122.160556',
        img: 'location in file system',
    },
    {
        name : 'South Hayward',
        coord: '37.634522,-122.056933',
        img: 'location in file system',
    },
    {
        name : 'South San Francisco',
        coord: '37.664225,-122.444403',
        img: 'location in file system',
    },
    {
        name : 'Union City',
        coord: '37.590775,-122.016972',
        img: 'location in file system',
    },
    {
        name : 'Walnut Creek',
        coord: '37.905406,-122.066725',
        img: 'location in file system',
    },
    {
        name : 'Warm Springs / South Fremont',
        coord: '37.502396,-121.938597',
        img: 'location in file system',
    },
    {
        name : 'West Dublin / Pleasanton',
        coord: '37.700015,-121.927775',
        img: 'location in file system',
    },
    {
        name : 'West Oakland',
        coord: '37.804823,-122.294691',
        img: 'location in file system',
    },
  ]