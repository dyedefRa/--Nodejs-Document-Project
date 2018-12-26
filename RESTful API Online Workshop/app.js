var app=module.exports=require('express')();
require('./core/mongoose');
require('./core/express.js')(app);

var port=process.env.PORT || 8008;

app.listen(port,function(err){
    if(err){
        console.error(err);
    }else{
        console.info('Proje başarılı bir şekilde çalışıyor on : '+port);
    }
})