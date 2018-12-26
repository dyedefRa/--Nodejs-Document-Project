var express=require('express');
var app=express();

app.get('/indir',function(req,res){
    
    res.sendFile(__dirname+'/indirmeOlayi.html');
});
app.get('/dosya',function(req,res){

    res.download(__dirname+'/indirilecekdosya.rar');
})
app.listen(8008);