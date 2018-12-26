

var Kullanici = require('../models/kullanici');


module.exports.indexGet = function (req, res) {

    res.render('login');

};


module.exports.indexPost = function (req, res) {


    console.log(req.body.parola);
    res.render('home', { "mesaj": req.body.kullaniciAdi });
};

module.exports.loginGet = function (req, res) {

    res.render('singup');
}
module.exports.loginPost = function (req, res) {

    //Gelen Nesneyi Kullaniciya castleme ve yeniKullaniciya atama
    var yeniKullanici = new Kullanici({
        ad: req.body.ad,
        soyad: req.body.soyad,
        kullaniciAdi: req.body.kullaniciAdi,
        sifre: req.body.sifre
    });
    yeniKullanici.save(function (err) {
        if (err) {

        }
        else {
            //Burası route yolu
            res.redirect('kullaniciListesii');
        }
    });
    console.log(yeniKullanici);


}
//Get aninda Kullanici classını lıstesın sayfa için metod
module.exports.kullaniciListesi = function (req, res) {
    //Kullaniciların hepsini al
    Kullanici.find(function (err, results) {

        res.render('kullaniciListesi', { Kullar: results });
    });

}

module.exports.kullaniciSilelim = function(req,res){
 
    Kullanici.findOneAndRemove({
        kullaniciAdi:req.params.kullaniciAdi
    },function(err){
        if(err){
            console.log('Hata var');
        }res.redirect('/login/kullaniciListesii');
    })
    
}