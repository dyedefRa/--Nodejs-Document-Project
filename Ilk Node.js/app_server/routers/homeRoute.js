var express=require('express');
var homeRoute=express.Router();
var homeController=require('./../controller/homeController');

homeRoute.get('/',homeController.index);

module.exports=homeRoute;