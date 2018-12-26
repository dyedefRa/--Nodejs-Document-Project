// METODLARI BARINDIRIYOR

var path = require('path');

//BURADA LAYOUT KULLLANDIK .render('...') ile
module.exports.bil1 = function (req, res) {
    // console.log(req.deneme);
    // res.sendFile(path.join(__dirname, '../../index.html'));
    var products=['1. BABOŞs','2. ZIPPSFJ','3. ASF'];
    
    res.render('bilgisayar',{"mesaj":"merhaba ilk Ejs","durum":"yeah","kisiDizisi":products});
}

//BURASI LAYOUT KULLANAMADAN !!! DIREK HTML ATTIK sendFİle ile
module.exports.bil2 = function (req, res) {

    res.sendFile(path.join(__dirname, '../../login.html'));
}


//BURADA LAYOUT KULLLANDIK .render('...') ile
module.exports.index=function (req, res) {

    res.render('meyve');
}




