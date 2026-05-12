const mongoose = require('mongoose')

// Removi as chaves que estavam aqui
const connect = () => {
    // É recomendável colocar o nome do banco na URL, ex: /meu-projeto
    mongoose.connect('mongodb://localhost:27017/projeto-crud') 
}

const db = mongoose.connection

db.once('open', () => { 
    console.log('connected to database')
})

db.on('error', console.error.bind(console, 'connection error: '))

module.exports = {
    connect
}
