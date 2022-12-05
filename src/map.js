const { application } = require("express");

var map;
var buttonSat = document.querySelector('#satellite');
button.addEventListener('click', function() {
    map.setMapTypeId('satellite');
});


function initMap(){
    
    var mapOptions = {
        center: {lat: -8.00937, lng:  -34.8553},
        zoom: 12,
        mapTypeId: 'roadmap'
    }

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

module.exports = map;