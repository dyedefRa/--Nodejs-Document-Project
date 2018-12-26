var express = require('express');
var app = express();

var mongoDB = require('mongodb');
var mongoClient = mongoDB.MongoClient;

app.post('/guncelleme', function (req, res) {
   
    mongoClient.connect('mongodb://127.0.0.1:27017/sss', function (err, data) {

        if (err) {
            console.log('HATA VAR');
        }
        else {

//$gt $lt $gte $lte $e  ICIN =>
//userCollection.find({yas:{$gt:30}}).toArray(function (err, data)

            var database = data.db('sss');
            var userCollection = database.collection('users');
            userCollection.find({}).toArray(function (err, data) {
                if (err) throw err;

                res.send(data);
            });

            // userCollection.update({ 'ad': 'baki' }, { $set: { 'soyad': 'OZTURK' } }, function (err, data) {
            //     if (err) {
            //         console.log('UPDATE DE HATA VAR');
            //     }
            //     else {
            //         console.log('Başarılı');
            //       res.send('OKEY');
            //     }
            // });


        }

    });

});

app.get('/angular',function(req,res){
    res.sendFile(__dirname+'/angularKullanimi.html');
})

app.listen(8008,'0.0.0.0');