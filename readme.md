# AHH BART

*A social platform to share "interesting" experiences on the California Bay Area Rapid Transit*

[Link to project hosted on Heroku]()

## Technologies Used

* MongoDB
* AJAX
* JQuery
* google maps api
* Express 




## Existing Features


* hidden form that pops up upon click of button (Share Your BART story)
* ability to create and post comments
* locations api with all BART stations
* posts api to hold all user posts
* map of BART stations
* location images populate in comments automatically based on station     selection



## Planned Features

* heat map to show where most comments are 
* additional posting options to: 
    - include user images upload
    - indicate which sense/s were affronted (check box specific icons for sight, hearing, smell, sanity)
* user login 
* notifications
* Vue integration for dynamic animations
* Full web app export with electronium
* featured post of the day based on number of likes 


##Cool Code Snippets
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
``` javascript
 $("form").submit(function(e) {
        e.preventDefault();
    $.ajax({
        method: 'GET',
        url: "api/stations",
        success: changeVal,
        error: errorLog
    });
 function changeVal(res){
     console.log(` this is :${$('select').val()}`);
    let station = res.find(stations => stations.name === ($("select").val()));
    $('.imgSelector').attr('value',station.img);
    $('#dateSelector').val(new Date().toDateInputValue());
    var str = $("form").serialize();
    $.post('api/posts', str);  
 }
    window.location.reload();
    });
```
#Resources Used
*for help with the form: https://forum.jquery.com/topic/jquery-form-with-upload-image
* Google maps API documentation: https://cloud.google.com/maps-platform/

#heroku setup

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

//////////////////////////////////////////////////////////////////