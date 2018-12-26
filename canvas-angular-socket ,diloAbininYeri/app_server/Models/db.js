//MYSQL YAPTIK!
var mysql = require('mysql');

var baglanti = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'deneme',
    port: '3307'
});

// baglanti.connect(function(err){
//     if(err){
//         console.log('SORUN VAR');
//     }
//     else{
//         console.log('BAGLANMA OKEY');
//     }
// });

// SELECT SORGUSU

// sorgu = 'select * from kullanici';
// baglanti.query(sorgu, function (err, data) {

//     if (err) {
//         throw err;
//     }
//     else {


//         console.log(data);
//         console.log(data[0]['Soyad']);
//         console.log(data.length);
//         console.log('BASARILI   ULAN ');
//     }

// });


//INSERT SORGUSU

id=242;
sorgu2 = "insert into kullanici values ('"+id+"','Ali','Vuhu','144')";

baglanti.query(sorgu2, function (err, data) {

    if (err) {
        console.log('Hata oluştu');
    } else {
console.log('OKEY');
    }
});


baglanti.end();