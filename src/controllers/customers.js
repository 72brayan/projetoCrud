const CustomerModel = require('../models/customers');
const { crypto } = require('../utils/password');

const defaultTitle = 'Cadastro de Clientes';

function index(req, res) {
    res.render('register', {
        title: defaultTitle
    });
}

async function add(req, res) {
    try {
        const { name, age, email, password } = req.body;

        if (!age || isNaN(Number(age))) {
            return res.render('register', {
                title: defaultTitle,
                message: 'Idade precisa ser um número!'
            });
        }

        const PasswordCrypto = await crypto(password);

        const register = new CustomerModel({
            name,
            age: Number(age),
            email,
            password: PasswordCrypto
        });

        await register.save();

        return res.render('register', {
            title: defaultTitle,
            message: 'Cadastro realizado com sucesso!'
        });

    } catch (error) {
        console.log(error);

        return res.render('register', {
            title: defaultTitle,
            message: 'Erro ao realizar cadastro!'
        });
    }
}

async function list(req, res) {
    const users = await CustomerModel.find();

    res.render('list', {
        title: 'Listagem de Usuários',
        users
    });
}

async function indexEdit(req, res) {
    const {id} = req.query

    const user = await CustomerModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário',
        user
    });
}
async function edit(req, res) {
    try {
        const { name, age, email } = req.body;
        const { id } = req.params;

        const user = await CustomerModel.findById(id);

        if (!user) {
            return res.render('edit', {
                title: 'Editar Usuário',
                message: 'Usuário não encontrado!'
            });
        }

        user.name = name;
        user.age = Number(age);
        user.email = email;

        await user.save();

        return res.render('edit', {
            title: 'Editar Usuário',
            user,
            message: 'Usuário salvo com sucesso!'
        });

    } catch (error) {
        console.log(error);

        return res.render('edit', {
            title: 'Editar Usuário',
            message: 'Erro ao salvar usuário!'
        });
    }
}


async function remove(req, res) {

    const {id} = req.params
    const remove = await CustomerModel.deleteOne({_id: id})
    if(remove.ok){
        res.redirect('list')
    }
}

module.exports = {
    index,
    add,
    list,
    indexEdit,
    edit,
    remove
};