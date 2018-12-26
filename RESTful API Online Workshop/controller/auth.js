var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('express-jwt');


exports.login = function (req, res) {
    User.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
        if (err) {
            //HATA
            console.error(err);
            res.status(500)
                .json({
                    success: false,
                    data: 'Error occured while login'
                })
        }
        else {
            if (user) {
                //Userin şifresi hariç herseyini almak..
                var userWillBeSigned = delete user.password;
                //Login sırasında imzalama olayi..
                var token = jwt.sign(userWillBeSigned, process.env.JWT_SECRET);
                user.token = token;
                user.save(function (err) {
                    if (err) {
                        res.json({
                            success: false,
                            data: 'Error occured while saving user token'
                        });
                    }
                    else {
                        res.json({
                            success: true,
                            data: token
                        });
                    }
                });
            } else {
                //KULLANICI YOK
                res.json({
                    success: false,
                    data: 'Invalid credentials'
                });
            }
        }
    })
}

exports.register=function(req,res){
    //TEK TEK SET YERINE CASH ETME OLAYINI YAPTIK
    var userModel=new User(req.body)
    userModel.save(function(err,user){
        if(err){
            console.error(err);
            res.status(500).json({
                success:false,
                data:'Error occured while registering user'
            });
        }
        else{
            res.json({
                success:true,
                data:user,
            });
        }
    });
}