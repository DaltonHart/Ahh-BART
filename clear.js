//clear.js

var db = require("./models");



db.Post.remove({}, function(err, posts){
    console.log('All posts removed');
    process.exit();
});

// db.Locat.remove({}, function(err, locats){
//     console.log('All stations removed');
//     process.exit();
//  });

