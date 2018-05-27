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
  ]