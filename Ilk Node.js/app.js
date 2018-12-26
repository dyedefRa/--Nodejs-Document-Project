// GENEL AYARLAR

// var http = require('http');//Server olusturmak ıcın kutuphane



var express = require('express');
var path = require('path');
var app = express();

//LAYOUT TANIMLADIM VE AKTIF ETTIM
var ejsLayout=require('express-ejs-layouts');
app.use(ejsLayout);

//body-parser ile POST edilen veriyi req ten duzgunce almak
var bodyParser=require('body-parser');
//Post edicegimiz veriler için kullanılacak
app.use(bodyParser.urlencoded({extended:false}));
//son için devreye girsin
app.use(bodyParser.json());

//MONGOOSE ISLEMLERI VE MONGODB
var db=require('./app_server/models/db');


//EJS ICIN ONEMLI !!
//VIEW OLAYI
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'));

//CSS I TANITTIM
app.use('/public', express.static(path.join(__dirname, 'public')));


//@@ ONEMLI !
//ROUTE TANIMLAMASI VE ROUTELARI YOLLARI VERILMESI RoleManager.js Olayı
var routeManager=require('./app_server/routers/routeManager');
routeManager(app);

//Scmayi alalım.. export edilmiş olması gerek..
var Kullanici=require('./app_server/models/kullanici');

// Schemayı olusturuallım

// var ilkKullanici= new Kullanici({
//     ad: 'Baki',
//     soyad: 'Ozturk',
//     kullaniciAdi: 'exes',
//     sifre: '12345'
// });

// ilkKullanici.save(function(err){
//     if(err){
//         console.log('Hata oldu '+err);
//     }
//     else{
//         console.log(ilkKullanici +' kullanıcısı kaydedildi');
//     }
// });


app.listen(8000);