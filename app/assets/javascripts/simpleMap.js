var map;
var arrMarkers = [];
var arrInfoWindows = [];
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

 $.getJSON("/pins.json", {}, function(json){
    $.each(json, function(i,item){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(item.latitude, item.longitude),
            map: map,
            title: item.created_at
        });
        arrMarkers[i] = marker;
        var infowindow = new google.maps.InfoWindow({
        });
        arrInfoWindows[i] = infowindow;
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    });
}); 

  google.maps.event.addListener(map, 'click', function(event) {
  	placeMarker(event.latLng, map);
  	console.log(event.latLng.B);
  	$.ajax({
	  type: "POST",
	  dataType:"json",
	  url: "/pins",
	  data: {pin: { latitude: event.latLng.k, longitude: event.latLng.B } }
	})
});
}

function placeMarker(position, map) {
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });
  map.panTo(position);
}

google.maps.event.addDomListener(window, 'load', initialize);


