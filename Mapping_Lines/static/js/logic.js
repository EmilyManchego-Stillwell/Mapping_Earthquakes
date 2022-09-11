// add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Map object zoomed in on Los Angeles, CA
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// // Coordinates for the center of the map between LAX and SFO
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// // Coordinates for the center of the map at SFO Zoom level 5
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     // Adding two new sets of coordinates to add another line to the map
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

// Skill Drill 13.4.3: Airline route starting in SFO to JFK to AUS to YYZ to DIA.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781],
    [39.8561, -104.6737]
    
];

// //Create a polyline using the line coordinates and make the line red(original example), yellow(second example)
// L.polyline(line, {
//     color:"yellow"
// }).addTo(map);

// Create polyline using line variable coordinates. Skill Drill 13.4.3 specs(blue dashed line, weight 4, opacity 0.5)
L.polyline(line, {
    color:"blue",
    dashArray: '5, 10',
    weight: 4,
    opacity: 0.5
}).addTo(map);

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

//****REMOVED CITIES VARIABLE TO BE IN A SEPARATE FILE****

// // Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(city => {
//     console.log(city)
//     // L.marker(city.location)
//     // Changing the marker from default marker to a circle marker with the radius set to city's population
//     L.circleMarker(city.location, {
//         // radius: city.population/100000
//         // Skill drill 13.4.2 adjustments to map
//         radius: city.population/200000,
//         color: "#f5f395",
//         fillColor: '#eda240',
//         fillOpacity: .25,
//         weight: 4
//     })
//     // Adding a popup to each marker using bindPopup() method.
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
//     .addTo(map)
// });

// // We create the tile layer that will be the background of our map
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the tile layer that will be the background of our map
// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Skill Drill 13.4.1 (Also used in 13.4.2)
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Skill Drill 13.4.3 Light Map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map
// dark.addTo(map);
// satelliteStreets.addTo(map);
// streets.addTo(map);
light.addTo(map);