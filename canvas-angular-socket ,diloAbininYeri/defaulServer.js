// var http = require('http');
// var fs = require('fs');
// var path = require('path');
// anadizin = path.dirname(require.main.filename);
// var server = http.createServer(function (req, res) {

//     var istekYol = req.url;
////  Turkce karakter ııcn
//     res.writeHead(200, { 'content-type': 'text/html;charset=UTF-8' });

//     fs.readFile(path.join(__dirname, istekYol), function (err, data) {
//         if (err) {
//             res.writeHead(404, { "content-type": "text/html;charset=UTF-8" });
//             res.write('Boyle bir sayfa yok.ÇÇŞİı');
//             res.end();
//         }
//         else {
//             res.write(data);
//             res.end();
//         }
//     });

// }).listen(8008);
// console.log('-------Program dinleniyor');