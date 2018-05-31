from https://stackoverflow.com/questions/32540044/html-display-current-date on how to set up the date
for help with the form: https://forum.jquery.com/topic/jquery-form-with-upload-image  

<<<<<<< HEAD
//how to add transit layer to Google Map
var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);

//also if you see BIG GREY BLOCKS on your map. remove the MAX height on your div. causes clipping issues in the maps database. 


////////////////////////////////////////////////////////////////////////////////////////
//heroku setup
=======
COOL CODE SNIPPETS
////////////////////////////////////////////////////////////////////////////////////////
//how to add transit layer to Google Map
```javascript
var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
```
//also if you see BIG GREY BLOCKS on your map. remove the MAX height on your div. causes clipping issues in the maps database. 

// called locations api with ajax
```javascript
$.ajax({
            method: 'GET',
            url: "api/stations",
            success: gotStations,
            error: errorLog
        });
// used the request to automagically populate the drop down list for location selection in for submit
    function gotStations(stations) {
        stations.forEach(function(station){
            renderStationsList(station);
        });
    }
    function renderStationsList(station){
        console.log("rendered:", station.name);
        var listItem = (`<option value="${station._id}">${station.name}</option>`)
        $('#locations').append(listItem);
    }
```
////////////////////////////////////////////////////////////////////////////////////////

//heroku setup
////////////////////////////////////////////////////////////////////////////////////////
>>>>>>> 1d451c204488297fd911e6f89b845c5a23d6ab4f

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