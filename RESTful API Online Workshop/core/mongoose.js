var mongoose = require('mongoose');
var fs = require('fs');
var models_path = process.cwd() + '/model';

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/nodeschool-webinar');

var db = mongoose.connection;

db.on('error', function (err) {

    console.error(' Mongo connection error : ' + err);
});
db.on('open', function callback() {
    console.info('Mongo connection establishled');
});
//CODE FIRST YAPIYORUZ!!
//Parametreye file atıyoruz ve bu fonk okuma fonksiyonu
//her /Model in içindeki  .js uzantılı dosya için o dosyayı yaz??
//Modelin altına yorumlar.js koyarsak suan , oto olarak dbye kaydetcek..
fs.readdirSync(models_path).forEach(function(file){

    if(~file.indexOf('.js')){
        require(models_path+'/'+file);

    }
});


