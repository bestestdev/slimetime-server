/**
 * Created by Devon on 2/23/2017.
 */

// Includes
const world = require('./world.js');

// Starts the server up
const start = function() {
    // TODO load the existing state

    // generate new world
    world.generate();


};

// Handles a message from a client
const listen = function(ws,message) {
    // TODO Auth

    // TODO Analyze message


};

// EXPORTS!
module.exports.start = start;
module.exports.listen = listen;
