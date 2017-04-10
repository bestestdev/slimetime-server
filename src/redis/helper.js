/**
 * Created by Devon on 2/23/2017.
 */
var redis = require("redis"),
    client = redis.createClient();
var geo = require('georedis').initialize(client);
var people = geo.addSet('people');
var places = geo.addSet('places');

const initWorld = function(cb) {
    var locationSet = {
        'Toronto': {latitude: 43.6667, longitude: -79.4167},
        'Philadelphia': {latitude: 39.9523, longitude: -75.1638},
        'Palo Alto': {latitude: 37.4688, longitude: -122.1411},
        'San Francisco': {latitude: 37.7691, longitude: -122.4449},
        'St. John\'s': {latitude: 47.5500, longitude: -52.6667},
        'New York': {latitude: 40.7143, longitude: -74.0060},
        'Twillingate': {latitude: 49.6500, longitude: -54.7500},
        'Ottawa': {latitude: 45.4167, longitude: -75.7000},
        'Calgary': {latitude: 51.0833, longitude: -114.0833},
        'Mumbai': {latitude: 18.9750, longitude: 72.8258}
    };

    geo.addLocations(locationSet, function(err, reply){
        if(err) {
            console.error("err:",err);

        } else {
            cb(reply);
        }
    });
};



// EXPORTS!
module.exports.initWorld = initWorld;