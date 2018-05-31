
for help with the form: https://forum.jquery.com/topic/jquery-form-with-upload-image  

COOL CODE SNIPPETS
////////////////////////////////////////////////////////////////////////////////////////
//how to add transit layer to Google Map
```javascript
var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
=======
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
>>>>>>> d3c7c6114c9de17ea9e1d1a7f895935c531f8ea3

//heroku setup
////////////////////////////////////////////////////////////////////////////////////////

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
