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
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : '19th St. Oakland',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : '24th St. Mission (SF)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Antioch',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Ashby (Berkeley)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Balboa Park (SF)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Bay Fair (San Leandro)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Castro Valley',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Civic Center / UN Plaza',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Coliseum',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Colma',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Concord',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Daly City',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Downtown Berkeley',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Dublin / Pleasanton',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'El Cerrito del Norte',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'El Cerrito Plaza',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Embarcadero (SF)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Fremont',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Fruitvale (Oakland)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Glen Park (SF)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Hayward',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'lafayette',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Lake Merritt (Oakland)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'MacArthur (Oakland)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Millbrae',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Montgomery St. (SF)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'North Berkeley',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'North Concord / Martinez',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Oakland International Airport',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Orinda',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Pittsburg / Bay Point',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Pittsburg Center',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Pleasant Hill / Contra Costa',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Centre',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Powell St. (SF)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Richmond',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Rockridge (Oakland)',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'San Bruno',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'San Francisco International Airport',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'San Leandro',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'South Hayward',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'South San Francisco',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Union City',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Walnut Creek',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'Warm Springs / South Fremont',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'West Dublin / Pleasanton',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
    {
        name : 'West Oakland',
        coord: '37.803647,-122.271596',
        img: 'location in file system',
    },
  ]