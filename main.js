const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const routesBase = require('./routes/base');
const routesLogin = require('./routes/login');
const routesCadastro = require('./routes/cadastro');

// configs template engine
nunjucks.configure('views', {
    autoescape: true,
    noCache: true,
    express: app
});
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// configs routes
app.use(routesBase);
app.use(routesLogin);
app.use(routesCadastro);

app.listen('8000', function () {
    console.log('>> Server online:8000');
});
