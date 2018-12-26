var express=require('express');
var loginroute=express.Router();
var loginController=require('./../controller/loginController');

loginroute.get('/',loginController.indexGet);
loginroute.post('/',loginController.indexPost);
loginroute.get('/signin',loginController.loginGet);
loginroute.post('/signin',loginController.loginPost);
loginroute.get('/kullaniciListesii',loginController.kullaniciListesi);
loginroute.get('/kullaniciSil/:kullaniciAdi',loginController.kullaniciSilelim);


module.exports=loginroute;