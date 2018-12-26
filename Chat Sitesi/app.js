var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile(__dirname + '/hello.html', function (err, data) {
        if (err) { throw err; }
        res.write(data);
    });
    console.log('Çalıştı at http://127.0.0.1:8000');
}).listen(8000, '127.0.0.1');

//SOCKET IO ORNEK;
var io = require('socket.io')(server);
var baglikisi;
var mesaj;
io.on('connection', function (socket) {
    socket.on('baglanan',function(msg){
        baglikisi=msg;
        console.log(msg+' adlı kişi bağlandı');
              });
   
 socket.on('yollananmesaj',function(msg){
     mesaj=msg;
     var hammesaj=baglikisi + " : " + mesaj ;
     console.log(hammesaj);
     
     io.sockets.emit('hepsinegitsin',hammesaj);
    
   
 });

  
    socket.on('disconnect', function () {
        console.log('Bir kişi serverdan ayrıldı');
        io.sockets.emit('cikti', 'adlı  kişi serverdan ayrıldı');
    });
})
