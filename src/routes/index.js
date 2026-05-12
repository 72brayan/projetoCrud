const express = require('express');
const router = express.Router(); 
const IndexController = require('../controllers/index')

const CustomersController = require('../controllers/customers')

//ROTAS DE RENDERIZAÇÃO DAS PÁGINAS

router.get('/', IndexController.index)

//REGISTRO DE USUÁRIOS

router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//LISTAR

router.get('/list', CustomersController.list)

// EDITAR

router.get('/edit', CustomersController.indexEdit)
router.post('/edit/:id', CustomersController.edit)

//remover

router.get('/remove/:id', CustomersController.remove)



module.exports = router
