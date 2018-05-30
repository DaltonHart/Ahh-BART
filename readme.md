from https://stackoverflow.com/questions/32540044/html-display-current-date on how to set up the date
for help with the form: https://forum.jquery.com/topic/jquery-form-with-upload-image

 
//how to add transit layer to Google Map
var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);

//also if you see BIG GREY BLOCKS on your map. remove the MAX height on your div. causes clipping issues in the maps database.


////////////////////////////////////////////////////////////////////////////////////////
//heroku setup

app.listen(process.env.PORT || 3000), function (){
    console.log ('Express server is running on localhost:3000)
};

heroku create (name of project)
heroku addons:create mongolab
heroku addons (checks current addons)

update database connection
mongoose.connect( process.env.MONGODB_URI || -rest of your connect on server.js-)
rm -r --cached node_modules (getting ready for hosting)
git push heroku master (send git to heroku for hosting)

heroku run bash (log into server for website)

///////////////////////////////////////////////////////////////////////////////////////
