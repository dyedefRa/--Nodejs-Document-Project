var express = require('express');
var app = express();
var path = require('path');

//HERHANGI BIR DOSYAYI PROJEYE TANITMAK!
app.use('/public', express.static(__dirname + '/public'));

app.get('/anasayfa', function (req, res) {

    // http://localhost:8008/anasayfa?id=5&soyad=3
    //PARAMETRELERI QUERY ile Json olarak alma olayi
    console.log(req.query);
    console.log(req.param('id'));
    res.sendFile(path.join(__dirname, 'index.html'));

});

app.get('/hakkimda/:param1/:param2', function (req, res) {

    // BU SEKILDE PARAMETRE ALMAK
    // http://localhost:8008/hakkimda/ass/sss
    console.log(req.param('param2'));

    res.send('YEAH');
});
app.get('/iletisim', function (req, res) {
    res.send('burası /iletişim (send ile gönderdık)  <p><a href="/anasayfa">/anasayfa ya git </a> </p>');
});


app.use(function (req, res) {
    // res.status(404);
    res.send('404 Boyle bir sayfa bulunmamaktadır.');

    res.end();

    //ERROR.ejs e gidemedim çünkü ejs yuklu degıl.

    // res.render('error',{'hataMesaji':'Böyle bir sayfa bulunmamaktadırs.'});

});



app.listen(8008);
