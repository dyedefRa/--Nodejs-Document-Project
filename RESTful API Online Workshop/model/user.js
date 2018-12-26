var mongoose = require('mongoose');
//Schemayi mongoosenin Schemasından aldık
//bu bir class
Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createDate: {
        type: String,
        required: true
    } ,
    token:String,
    tokenExpireDate:Date
});

//Mongosenin model metonunun içine 'User' adında ki dictionary ile schemamızı yolladık
module.exports=mongoose.model('User',userSchema);