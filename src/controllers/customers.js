CustomerModel = require('../models/customers')
const { crypto } = require('../utils/password')

function index  (req, res) {
    res.render('register',{
        title: 'Cadastro de clientes'
    })
}
async function add(req, res){
    const {
    name,
    age,
    email,
    password
    
} = req.body

const PasswordCrypto = await crypto(password)

const register = new CustomerModel({
    name,
    age,
    email,
    password: PasswordCrypto,
})

register.save()


res.send('Cadastro realizado!')
}

function listUsers(req, res){
    res.render('listUsers',{
        title: 'Listagem de Usuários',
        users:[]
    })
}

module.exports = {
   index,
    add,
    listUsers
}

