// required section
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const multer = require('multer');

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

// photo storage 
//MULTER CONFIG: to get file photos to temp server storage
const multerConfig = {
    
  storage: multer.diskStorage({
   //Setup where the user's file will go
   destination: function(req, file, next){
     next(null, './public/photo-storage');
     },   
      
      //Then give the file a unique name
      filename: function(req, file, next){
          console.log(file);
          const ext = file.mimetype.split('/')[1];
          next(null, file.fieldname + '-' + Date.now() + '.'+ext);
        }
      }),   
      
      //A means of ensuring only images are uploaded. 
      fileFilter: function(req, file, next){
            if(!file){
              next();
            }
          const image = file.mimetype.startsWith('image/');
          if(image){
            console.log('photo uploaded');
            next(null, true);
          }else{
            console.log("file not supported");
            
            //TODO:  A better message response to user on failure.
            return next();
          }
      }
    };

// post for uploads
    app.post('/upload',multer(multerConfig).single('photo'),function(req,res){
      res.send('Complete!');
   });
