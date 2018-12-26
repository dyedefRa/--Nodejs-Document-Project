//ROUTERS TANIMLA
var elektronikRoute = require('./elektronikRoute');
var loginRoute = require('./loginRoute');
var homeRoute = require('./homeRoute');

//ROUTER YOLLARI BELIRLE
module.exports = function (app) {
    app.use('/', homeRoute);
    app.use('/bilgisayar', elektronikRoute);
    app.use('/login', loginRoute);

}


