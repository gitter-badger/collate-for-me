//Server Side
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var url = require('url');
var fs = require('fs');

app.listen(5000);

function handler (req, res) { //create server
  fs.readFile(__dirname + '/public/index.html', function(err, data) { //read file index.html in public folder
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

// Web Socket Connection
io.sockets.on('connection', function (socket) {
	//console.log("connect");
  // If we recieved a command from a client to start watering lets do so
  socket.on('aaa', function(data) {
      console.log(data.toString());

      //delay = data["duration"];

      // Set a timer for when we should stop watering
      //setTimeout(function(){
          socket.emit("data1","Hello too");
      //}, 1000);

  });
  
});