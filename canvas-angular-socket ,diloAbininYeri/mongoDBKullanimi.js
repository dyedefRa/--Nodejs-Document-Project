var express = require('express');
var app = express();

//MONGO DB ICIN

var mongoDB = require('mongodb');
var mongoClient = mongoDB.MongoClient; //mongo baglantısını yapar ve sorgu yapar


app.get('/ali', function (req, res) {



    mongoClient.connect('mongodb://127.0.0.1:27017/sss', function (err, db) {
        if (err) {
            console.log('HATA VAR');

        }
        else {



            var database = db.db('sss');

            var userTablo = database.collection('users');

            //INSERT OLAYI


            // userTablo.insert({ 'ad': 'Pakize', 'mevki': 'hizli' }, function (hata, cikti) {

            //     if (hata) throw hata;

            //     console.log(cikti);
            // });

            //SELECT OLAYII

            // userTablo.find().toArray(function (er, data) {
            //     res.send(data[0].asfa);
            // });

            //SILME OLAYI


            userTablo.remove({ 'ad': 'yeah' }, function (err, data) {
                if (err) {
                    console.log('Silme işleminde bir sorun oluştu');
                } else {

                 res.send(data);
                }
            });
        }
    });
});

app.listen(8008);

