var express = require('express');
var fs = require('fs');
module.exports = function () {
    var controllers = {};
    var controllers_path = process.cwd() + '/controller';
    //Bu yolu her okudugunda..
    fs.readdirSync(controllers_path).forEach(function (file) {
        //eger uzantısı .js ıle bıtıyorsa
        if (file.indexOf('.js') != -1) {
            //Key value olayi yapıyor
            //Keyine controllerın adını valuesıne yolunu verıyoruz..
            controllers[file.split('.')[0]] = require(controllers_path + '/' + file);
        }
    });
    var router = express.Router();

    router.route('/users')
        .post(controllers.user.save)
        .get(controllers.user.list);

    router.route('/users/:id')
        .get(controllers.user.get)
        .put(controllers.user.update)
        .delete(controllers.user.delete);

    router.route('/login')
        .post(controllers.auth.login);

    router.route('/register')
        .post(controllers.auth.register);

        return router;
};