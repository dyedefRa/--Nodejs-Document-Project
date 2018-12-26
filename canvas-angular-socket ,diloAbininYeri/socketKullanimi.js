var express = require('express');
var app = express();
var path = require('path');
var server = app.listen(8008, '0.0.0.0');
var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {


    socket.on('baglanma',function(data){
        // io.sockets.emit('yollama',data);
        socket.broadcast.emit('yollama',socket.id);
    });
  
});







app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname,'/socketKullanimi.html'));
});
