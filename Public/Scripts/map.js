console.log('IM WORKING');

$(document).ready(function(){

var map;
function initMap() {
    console.log('map!');
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 37.78, lng: -122.44},
        zoom: 6
    });
}
initMap();



});