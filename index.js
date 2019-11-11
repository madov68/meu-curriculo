const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async(request, response) =>{
    response.render('home')
})

app.listen(port, (err) => {
    if(err){
        console.log('Erro ao iniciar Servidor')
    }else{
        console.log('Servidor Iniciado')
    }
})