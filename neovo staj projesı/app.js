var express=require('express');
var app=express();
var path = require('path');

// var ejsLayout=require('express-ejs-layouts');
// app.use(ejsLayout);

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'));
// var session=require('express-session');
// app.use(session({secret:'sessionCode',resave:false}));






var routeManager=require('./app_server/routers/routeManager');
routeManager(app);



app.listen(8008);