const express = require('express')
const path = require('path')
const { title } = require('process')
const app = express()
const db = require('./database')
const port = process.env.PORT || 3000
const routes = require('./routes')
const { name } = require('ejs')

//conexão com o banco de dados 
db.connect()


// definindo template engine

app.set('view engine', 'ejs')

// definindo os arquivos publicos

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views')) 

//habilitando o server pra receber dados de formulário via post 

app.use(express.urlencoded({extended:true}))

//DEFININDO AS ROTAS

app.use('/', routes)



// error 404 Middleware

app.use((req, res)=>{
    res.send('Página não encontrada')
})

// executando o servidor 


app.listen(port, ()=> console.log(`Server us running on port ${port}`))
