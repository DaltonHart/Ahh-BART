console.log('MAP WORKING');

$(document).ready(function(){
  //request to get response from location api
    $('#info').ready(function(){
        $.ajax({
            method: 'GET',
            url: "api/stations",
            success: stationsCord,
            error: errorLog
          });
        });

//init a google map
var map;
function googleMap() {
    console.log('map!');
    map = new google.maps.Map(document.getElementById("map"), {
      //center map around montgomery station
        center: {lat:37.789557, lng:-122.400825},
        zoom: 10
    });
    var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
}
googleMap();

//if error log error from request
  function errorLog(a,b,c){
    console.log(b);
  }
// if success loop through the response and pull the lat and lng coords from the locations api
  function stationsCord (response){
    console.log(response);
    for (i=0; i < response.length; i++  ){
      var cordLat = response[i].coord.lat;
      var cordLng = response[i].coord.lng;
      // create an icon
      var icon = {
        scaledSize: new google.maps.Size(30, 30), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    //set coord data for google map pin
    var latLng = new google.maps.LatLng(cordLng,cordLat);
    //create and place the pin onto the map
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,icon: {
              url: "/images/transport_bus_station.svg",
              scaledSize: new google.maps.Size(15, 15)
            }   
          });
          
    }
  }


});
