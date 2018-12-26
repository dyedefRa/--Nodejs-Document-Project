//BU BIR SCHEMA YANI CLASS
//CLASSLARIN ICI DOLU HALI OLAN OBJECTLERE=>DOCUMENT
//DOCUMENTLERIN OLSUTURGU TABLOLARA DA COLLECTION DIYORUZ!!

//Aktif olması gerekıyor app.jste
var mongoose = require('mongoose');

var schema = mongoose.Schema;

//SU AN SADECE BU PROJE ICIN SINIF OLUSTURDUK
var kullaniciSchema = new schema({
    ad: String,
    soyad: String,
    kullaniciAdi: { type: String, required: true, unique: true },
    sifre: { type: String, required: true }
},{collection:'Kullanicilar'});

//MODELLERI DB YE YUKLEMEMIZ GEREK..

//DB DE MODEL OLUSTURALIM
var Kullanici=mongoose.model('Kullanici',kullaniciSchema);
//Olusturdugumuz (dbdeki) Kullanici modeliyle kullaniciShema'sını ilişkilendirdik

module.exports=Kullanici;


