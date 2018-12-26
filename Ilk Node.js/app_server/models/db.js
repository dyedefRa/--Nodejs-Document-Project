var mongoose=require('mongoose');

mongoose.Promise =require('bluebird');

//DB YOLU
var mongoDB='mongodb://localhost/IlkProje';

mongoose.connect(mongoDB,function(err,data){
    if(err){
        console.log('Hata oluştu'+err);
    }
    else{
        console.log('mongoose baglandi BEBEGIM '+mongoDB);
    }
});