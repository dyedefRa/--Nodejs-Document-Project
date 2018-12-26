var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressJwt = require('express-jwt');
var morgan = require('morgan');
var unless = require('express-unless');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (app) {
    //Post Metodu Gönderebilsin
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    //put Metodu Gönderebilsin  || Json Gönderebilsin
    app.use(methodOverride());

    //Çalışan programı alıp test ortamında INTEGRASYON Testi yapıyoruz..
    //Birbirine karışma olayi oluyormuş program ile test logları arasında....

    //Eger test olayiysa logları kapasın
    if (process.env.NODE_ENV != 'test') {
        //Log olayi yapıyoruz burada
        app.use(morgan('combined'));
    }

    //Guvenlik standartı
    app.use(function (req, res, next) {
        // http://localhost:4000

        //Hepsine izin veriyoruz 
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
        next();
    });

    //JWT KONTROLU
    app.use(
        expressJwt({
            //Iletişimi token üzerinden yapıyor olacagız ama
            //Kullanici girdiginde bilgilerini alıyoruz ve bişeye kaydediyoruz =>
            //JWT_SECRET adlı degıskende eklenıyor bunu kımsenın bılmemesı lazım
            //Sifrelenirken bu anahtar kullanılıyor
            secret: process.env.JWT_SECRET || 'sssshhhhh'
        }).unless({
            //Bu yollar olmadıgı surece expressJWT'yi uygula?! diyoruz
            path: ['/api/login', '/api/register']
        })
    );

   app.use(function(req,res,next){
       User.find({token:req.token},function(err,user){
           if(err) return next(err);
           req.user=user;
           next();
       });
   });
   app.use('/api',require(process.cwd()+'/core/router.js')());
   app.all('*',function(req,res){
       res.status(404).json({
           success:false,
           data:'Not found'
       })
});

}