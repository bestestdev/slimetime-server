/**
 * Created by Devon on 2/23/2017.
 */

// Includes
const myredis = require('./redis/helper.js');
var redis = require("redis"),
    client = redis.createClient();
var geo = require('georedis').initialize(client);

// Generates a new world
const generate = function() {
    // Split the world up into quadratic grids
    // TODO more than one resolution
    //console.log("hello");
    myredis.initWorld(function(grid) {

        geo.location('Toronto', function(err, location){
            if(err) console.error(err);
            else console.log('Location for Toronto is: ', location.latitude, location.longitude)
        });

        //console.log(grid);
            /*.forEach(function(cell) {
            console.log(cell);
        });*/
    });



};

// EXPORTS!
module.exports.generate = generate;
