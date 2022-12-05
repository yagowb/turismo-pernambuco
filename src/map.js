
var map;

var buttonSat = document.querySelector('#satellite');
buttonSat.addEventListener('click', function() {
    map.setMapTypeId('satellite');
});

var buttonMapa = document.querySelector('#roadmap');
buttonMapa.addEventListener('click', function() {
    map.setMapTypeId('roadmap');
})

var buttonTerrain = document.querySelector('#terrain');
buttonTerrain.addEventListener('click', function() {
    map.setMapTypeId('terrain');
})


function initMap(){
    
    var mapOptions = {
        center: {lat: -8.00937, lng:  -34.8553},
        zoom: 12,
        mapTypeId: 'roadmap'
    }
    var mar = new google.maps.Marker({lat: -8.00937, lng:  -34.8553});


    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

