var config = require('dotenv').config();

var Datastore = require('nedb');
var DbUser = new Datastore({
    filename: 'database/DbUser.db',
    autoload: true
});
var DbTwitter = new Datastore({
    filename: 'database/DbTwitter.db',
    autoload: true
});

var Twitter = require('twitter');
var app = require('http').createServer();
var io = require('socket.io')(app);
app.listen(5000);

// Web Socket Connection
var WebSocket = io.sockets.on('connection', function(socket) {
    // If we recieved a command from a client, print in console 
    socket.on('custom_request', function(data) {
        console.log('request received: ', data);

        var info = {
            request: data,
            name: 'Scott',
            twitter: '@ScottWRobinson'
        };

        DbUser.insert(info, function(err, doc) {
            socket.emit('success: request', 'response');
        });
    });
});

var client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

client.get('search/tweets.json?q=nasa', function(error, statuses, response) {
    if (!error) {
        DbTwitter.insert(statuses, function(err, doc) {
            WebSocket.emit('success: request', statuses);
        });
    }
});