// add console.log to check to see if our code is working
console.log("working");

// Tile Layer Options
// Streets Tile Layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Satellite Streets Tile Layer
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both map styles
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// ******* Create the map object with alternative method, which is used when using multiple tile layers for map ********
// Create the map object with a center and zoom level
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing Earthquakes from the past 7 days URL
let earthquakesLast7Days = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// // Create a style for the lines.
// let myStyle = {
//     color: "blue",
//     fillColor: "#f6f7ad",
//     fillOpacity: .25,
//     weight: 1
// };

// Retrieve the earthquake GeoJSON Data
d3.json(earthquakesLast7Days).then(function(data) {
    console.log(data);
    //Creating GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo(map);
});