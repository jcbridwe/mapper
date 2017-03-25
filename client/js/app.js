
var map = L.map('map').setView([35.7787, -78.6397], 15);
map.options.minZoom = 14;
map.options.maxZoom = 18;
map.setMaxBounds([[35.82389, -78.40], [35.704567, -78.80]]);

var layers = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
}).addTo(map);



var bar = L.icon({
		iconUrl: 'https://image.flaticon.com/icons/png/512/33/33309.png',
		iconSize: [24, 24],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var beer = L.icon({
		iconUrl: 'https://images.vexels.com/media/users/3/129956/isolated/preview/27c9746749f6da553d790fbbac71c986-cup-of-beer-drink-icon-by-vexels.png',
		iconSize: [24, 24],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var restaurant = L.icon({
		iconUrl: 'https://cdn0.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-2/24/2034-512.png',
		iconSize: [24, 24],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var music = L.icon({
		iconUrl: 'http://www.freeiconspng.com/uploads/guitar-icon-png-21.png',
		iconSize: [24, 24],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var culture = L.icon({
		iconUrl: 'https://cdn3.iconfinder.com/data/icons/law-2/500/chancery-512.png',
		iconSize: [24, 24],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var cafe = L.icon({
		iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cup_of_coffee.svg/600px-Cup_of_coffee.svg.png',
		iconSize: [24, 24],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var occult = L.icon({
		iconUrl: 'http://www.clippix.com/images/pentagrams/pentagram%20-%20eye%20of%20horus.png',
		iconSize: [24, 24],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var points = L.geoJson(dtr_points, {
    onEachFeature: function (feature, layer) {
        var link_url = "<a href='" + feature.properties.Link + "' target='_blank'>" + feature.properties.Name + "</a>"
        console.log(link_url);
        layer.bindPopup(link_url);
        // layer.bindPopup("<a href=" + feature.properties.Link + ">" + feature.properties.Name + "</a>");
        
         if(feature.properties.Type == "beer") {
            layer.setIcon(beer);
         };
         if(feature.properties.Type == "bar") {
            layer.setIcon(bar);
         };
         if(feature.properties.Type == "restaurant") {
            layer.setIcon(restaurant);
         };
         if(feature.properties.Type == "music") {
            layer.setIcon(music);
         };
         if(feature.properties.Type == "culture") {
            layer.setIcon(culture);
         };
         if(feature.properties.Type == "cafe") {
            layer.setIcon(cafe);
         };
         if(feature.properties.Type == "occult shop") {
            layer.setIcon(occult);
         };
         
         
      }    
}).addTo(map);

L.control.zoom({
      position:'bottomright'
     }).addTo(map);



L.control.layers(points).addTo(map);



// var overlays = {};

// var type = feature.properties.Type;

//   // Check if there's already an overlay for this category
//   if (!overlays[type]) {

//     // Create and store new layer in overlays object
//     overlays[destination] = new L.GeoJSON(null, {
//       'onEachFeature': function () {},
//       'style': function () {}
//     });

//     // Add layer/title to control
//     controlLayers.addOverlay(overlays[type], type); 
//   }

//   // Add feature to corresponding layer
//   overlays[type].addData(feature);