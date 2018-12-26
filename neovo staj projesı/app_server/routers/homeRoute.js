var express=require('express');
var homeRoute=express.Router();
var homeController=require('./../controllers/homeController');
homeRoute.get('/',homeController.index);
homeRoute.get('/create',homeController.createGet);
homeRoute.post('/create',homeController.createPost);
homeRoute.get('/details',homeController.details);

// BURASI GALIBA OKEY

module.exports=homeRoute;