// Server Side
var app = require('http').createServer();
var io = require('socket.io')(app);

var Datastore = require('nedb');
var users = new Datastore({
    filename: 'database/users.db',
    autoload: true
});

app.listen(5000);

// Web Socket Connection
io.sockets.on('connection', function(socket) {
    // If we recieved a command from a client, print in console 
    socket.on('custom_request', function(data) {
        console.log('request received: ', data);

        var info = {
            request: data,
            name: 'Scott',
            twitter: '@ScottWRobinson'
        };

        users.insert(info, function(err, doc) {});

        socket.emit('success: request', 'response');
    });
});