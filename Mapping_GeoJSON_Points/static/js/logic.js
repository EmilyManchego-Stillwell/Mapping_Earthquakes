// add console.log to check to see if our code is working
console.log("working");

// ******* Create the map object with setView() method. Used when only using single tile layer for map***********
// // Create the map object with a center at San Francisco Airport and zoom level 10.
// let map = L.map('mapid').setView([37.6213, -122.3790], 10);
// // Create the map object with center at center of the Earth and zoom level 2
// let map = L.map('mapid').setView([30, 30], 2);

// ******* Create the map object with alternative method, which is used when using multiple tile layers for map 
//         put after base layer code. ********

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data
// L.geoJSON(sanFranAirport).addTo(map);

// // Grabbing our GeoJSON data and adding a marker using pointToLayer function
// L.geoJSON(sanFranAirport,{
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.city + "</h2>");
//     }
// }).addTo(map);

// //Grabbing our GeoJSON data and adding a popup marker using onEachFeature function.
// L.geoJSON(sanFranAirport,{
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2> Airport code:" + feature.properties.faa + "</h2><hr><h2> Airport name:" + feature.properties.name);
//     }
// }).addTo(map);

// // Skill Drill 13.5.2
// L.geoJSON(sanFranAirport,{
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2><hr><h2>" + feature.properties.city + "</h2>");
//     }
// }).addTo(map);

// Add a marker to the map for Los Angeles, California
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//Changing the marker to a circle
// let marker = L.circle([34.0522, -118.2437], {
//     radius:100
// }).addTo(map);

// // Skill Drill 13.4.1
// let marker = L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#f5f395',
//     fillOpacity: 0.20,
//     radius:300,
// }).addTo(map);

// We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Skill Drill 13.4.1 Dark Tile Layer (on 13.5.4 this will become another map view option)
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Skill Drill 13.5.2 Night Tile Layer
let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Skill Drill 13.5.2 Outdoor Tile Layer
let outdoors = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// // Then we add our 'graymap' tile layer to the map
// // ******** The code below is if you are only using one type of map view option*******
// dark.addTo(map);
// streets.addTo(map);
// night.addTo(map);

// // Code below is what you use when you have multiple tile layers, which give you multiple map view options
// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
};

// ******* Create the map object with alternative method, which is used when using multiple tile layers for map ********
// Create the map object with a center and zoom level
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/EmilyManchego-Stillwell/Mapping_Earthquakes/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/static/data/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    //Creating GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        // Skill Drill 13.5.3 Add popup to each marker with airport code and airport name.
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h3> Airport code: " + feature.properties.faa + "</h3><hr><h3> Airport name: " + feature.properties.name + "</h3>");
        }
    }).addTo(map);
});