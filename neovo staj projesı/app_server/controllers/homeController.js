var path = require('path');
var request = require('request');


module.exports.index = function (req, res) {
    res.sendFile(path.resolve('index.html'));

}
module.exports.createGet = function (req, res) {
    res.sendFile(path.resolve('create.html'));

}
module.exports.createPost = function (req, res) {
    var book = req.body;

    request.post(
        'http://5b5c4fcd6a725000148a6771.mockapi.io/api/Books',

        { json: { kitapad: book.kitapad, yazar: book.yazar, yayinevi: book.yayinevi, basimyeri: book.basimyeri, basimyili: book.basimyili, sayfasayisi: book.sayfasayisi } }

    );
    res.redirect('/create');


}
module.exports.details = function (req, res) {
    var id = req.query.kid;

    
    request.get("http://5b5c4fcd6a725000148a6771.mockapi.io/api/Books/"+id, (error, response, body) => {
        if (error) {
            return console.log(error);
            console.log('BURADAYIZ');
        }
       res.render('details',{kitap:JSON.parse(body)});
    });
   
    // res.sendFile(path.resolve('details.html'));
}
