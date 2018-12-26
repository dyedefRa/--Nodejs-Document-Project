var express = require('express');
var app = express();

//BODY-PARSER GEREKLILIKLERI--POST OLAYI
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//SESSIONN ICIN GEREKLI KODLAR
var session = require('express-session');
app.use(session({ secret: "sessionCode",resave:false }));


//GIRIS OLAYLARI
app.get('/home', function (req, res) {
    if (req.session.aktifKullanici) {

        res.sendFile(__dirname + '/home.html');
        console.log(req.session.aktifKullanici+' giriş yaptı');
    } else {
        res.redirect('/login');
        console.log('Giriş yapılmadı. Lütfen giriş yapınız');
    }


})


app.get('/login', function (req, res) {
    if (req.session.aktifKullanici) {
        console.log(req.session.aktifKullanici+' adlı kişiye çıkış yapıldı');
        // req.session.aktifKullanici=null;
        // delete req.session.aktifKullanici;
        req.session.destroy();

    }
    res.sendFile(__dirname + '/login.html');
});
app.post('/login', function (req, res) {
    var kullaniciAdi = 'exe';
    var parola = '123';
    postKullaniciAdi = req.body.kadi;
    postParola = req.body["parola"];
    if (kullaniciAdi == postKullaniciAdi && parola == postParola) {
        req.session.aktifKullanici = postKullaniciAdi;
        res.redirect('home');
    
    }
    else {
        console.log('Giriş yanlış');
        res.redirect('login');
    }




});



app.listen(8009);