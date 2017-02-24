/**
 * Created by Devon on 2/23/2017.
 */

// Includes
const redis = require('./redis/helper.js');

// Generates a new world
const generate = function() {
    // Split the world up into quadratic grids
    // TODO more than one resolution
    console.log("hello");
    redis.initWorld(function(grid) {
        console.log(grid);
            /*.forEach(function(cell) {
            console.log(cell);
        });*/
    });



};

// EXPORTS!
module.exports.generate = generate;
