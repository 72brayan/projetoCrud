const express = require('express')
const path = require('path')
const { title } = require('process')
const app = express()
const port = process.env.PORT || 3000

// definindo template engine

app.set('view engine', 'ejs')

// definindo os arquivos publicos

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views')) 

//habilitando o server pra receber dados de formulário via post 

app.use(express.urlencoded({extended:true}))

//rotas

app.get('/', (req, res)=>{
    res.render('index',{
        title: 'teste'
    } )
})

// error 404 Middleware

app.use((req, res)=>{
    res.send('Página não encontrada')
})

// executando o servidor 


app.listen(port, ()=> console.log(`Server us running on port ${port}`))
