const express = require('express');
const router = express.Router();

router.get('/home', function (request, response) {
    let user = { 
        nome: 'Joao', 
        email: 'joao@ifro.edu.br'
    };

    response.render('home');

});

router.get('/', function (request, response) {
    response.render('home');
});

router.get('/perfil', function (request, response) {
    response.render('perfil');
});

router.get('/pesquisar', function (request, response) {
    response.render('pesquisar');
});

router.get('/notificacoes', function (request, response) {
    response.render('notificacoes');
});

router.get('/configuracoes', function (request, response) {
    response.render('configuracoes');
});
module.exports = router;