var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController');
/* GET home page. */
router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/register', indexController.register);
router.get('/fotoPerfil', indexController.fotoPerfil);
router.get('/buscador', indexController.buscador)

module.exports = router;
