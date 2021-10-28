var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images/'});

var postsController = require('../controllers/postController');
/* GET home page. */
router.get('/agregarPost', postsController.agregarPost);
router.post('/agregarPost', upload.single('image'), postsController.guardado);

router.get('/:id', postsController.detallePost);


//router.get('/comentariosPost/:user', postsController.comentariosPost);
//router.get('/login', indexController.login);
//router.get('/register', indexController.register);

module.exports = router;