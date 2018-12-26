
var express=require('express');
var elektronikRouter=express.Router();
var elektronikController=require('../controller/elektronikController');

// route.use(function(req,res,next){
// req.deneme='Merhaba';
// next();
// });

elektronikRouter.get('/pc1',elektronikController.bil1);
elektronikRouter.get('/pc2',elektronikController.bil2);
elektronikRouter.get('/yeni',elektronikController.index);

module.exports=elektronikRouter;