/**
 * Created by Devon on 2/23/2017.
 */

// Core includes
const core = require('../src/core.js');

// Start up the server sterff
core.start();

// Websockety shit
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 4139 });

// Defines a connection from a client
wss.on('connection', function connection(ws) {

    // Defines listeners for client interaction
    ws.on('message', function incoming(message) {
        // Run the main app handler
        core.listen(ws,message);

        // TODO remove
        console.log('received: %s', message);
    });

    ws.send('something');
});

// TODO There may be some shit that happens here outside the webbysockety sterff