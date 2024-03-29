var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter();

server.on('request', function (request) {
    request.approved = true;
});

server.on('request', function (request) {
    console.log(request);
});

server.on('error', function (err) {

});

server.emit('request', {from: 'Client'});
server.emit('request', {from: 'Another client'});
server.emit('error', new Error('Server error'));