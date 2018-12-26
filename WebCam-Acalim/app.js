var app=require('express')();

app.get('/',function(req,res){

    res.sendFile(__dirname+'/cam.html');
    console.log('OKEY');
});

app.listen(8008);