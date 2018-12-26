var app=require('express')();

//CANVAS-realTimeCizim
var server= app.listen(8008,'0.0.0.0');
var io=require('socket.io').listen(server);

app.get('/',function(req,res){

    res.sendFile(__dirname+'/canvas-RealTimeCizim.html');
});

io.sockets.on('connection',function(socket){
    socket.on('gonder',function(data){
        io.sockets.emit('al',data);
    });
});
