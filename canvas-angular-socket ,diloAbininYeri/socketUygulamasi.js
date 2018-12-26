var app=require('express')();
var server=app.listen(8008,'0.0.0.0');
var io=require('socket.io').listen(server);

app.get('/',function(req,res){
    res.sendFile(__dirname+'/socketUygulamasi.html');
});

io.sockets.on('connection',function(socket){

    socket.on('gonder',function(data){
       io.sockets.emit('mesajiGonder',data);
    })
});