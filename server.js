// required section
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const controllers = require('./controllers');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.static("."));

const db = require(`./models`);

// get controllers
app.get('/api', controllers.api.index);


//send index to front of server
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
  // res.sendFile('views/index.html' , { root : __dirname});
})


//routes
//GETS
app.get('/api/posts', controllers.post.index);
app.get('/api/stations', controllers.locat.index);
app.get('/api/stations/update', controllers.locat.create);
//POSTS
//creates posts on post request
app.post('/api/posts', controllers.post.create);





// app.use()

// listen
app.listen(3000, ()=>{
  console.log("Listening to port 3000");
})
