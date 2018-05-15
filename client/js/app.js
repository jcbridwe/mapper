// Create map object, set view, zoom, and bounds
var map = L.map('map').setView([35.7787, -78.6397], 14.50);
map.options.minZoom = 14;
map.options.maxZoom = 18;
map.setMaxBounds([[35.82389, -78.40], [35.704567, -78.80]]);

// Add basemap
var layers = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
}).addTo(map);

// Create icon variables
var types = ['beer','bar','restaurant','music','culture','cafe', 'occult shop'];

var bar = L.icon({
        iconUrl: 'http://www.free-icons-download.net/images/red-cocktail-icon-56567.png',
		iconSize: [29, 29],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var beer = L.icon({
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/BRILLIANT/food/png/400/beer.png',
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
		iconSize: [26, 26],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var culture = L.icon({
		iconUrl: 'https://cdn3.iconfinder.com/data/icons/law-2/500/chancery-512.png',
		iconSize: [18, 18],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var cafe = L.icon({
		iconUrl: 'http://www.freeiconspng.com/uploads/coffee-icon-png-29.png',
		iconSize: [20, 20],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

var occult = L.icon({
		iconUrl: 'http://www.clippix.com/images/pentagrams/pentagram%20-%20eye%20of%20horus.png',
		iconSize: [20, 20],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

//Create layer menu and geolocator controls
var layerControl = L.control.layers().addTo(map);

var locator = L.control.locate({
    position: 'topleft',
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);

//Add layers with attributes based on type
types.forEach(function(type) {
    
    //get geoJson data
    var layer = L.geoJson(dtr_points, {
        filter: function(feature, layer) {
            return feature.properties.Type == type;
        }, 
        onEachFeature: function (feature, layer) {
            //render hyperlink into popup
            var link_url = "<a href='" + feature.properties.Link + "' target='_blank'>" + feature.properties.Name + "</a>";
            layer.bindPopup(link_url);
            
            //based on type, set icon  
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
    layerControl.addOverlay(layer, type);
});



