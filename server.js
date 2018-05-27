// required section
const express = require("express");
const app = express();

const controllers = require('./controllers');


app.use(express.static('public'));

const db = require(`./models`);

// get controllers
app.get('/api', controllers.api.index);


//send index to front of server
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
  // res.sendFile('views/index.html' , { root : __dirname});
})


//routes
app.get('/api/posts', controllers.post.index);
app.get('/api/stations', controllers.locat.index);




// app.use()

// listen
app.listen(3000, ()=>{
  console.log("Listening to port 3000");
})
