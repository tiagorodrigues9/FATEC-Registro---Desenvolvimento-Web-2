
const express = require("express")

const app = express()

app.set('view engine', 'ejs')

app.get("/", function(req, res){

    res.render('index')

})

app.get("/perfil",(req,res) =>{

    res.render('perfil')

})

app.get("/videos", (req,res) =>{

    res.render('videos')

})

app.get("/produtos/:produto?", (req,res) =>{

    const listaProdutos = ['Computador', 'Celular', 'Tablet', 'Notebook']
    const produto = req.params.produto
    res.render("produtos", {

        produto: produto,
        listaProdutos: listaProdutos

    })

})

app.get("/pedidos", (req,res) => {

    const pedidos = [

        {produto: "Celular", valor: 3000},
        {produto: "Computador", valor: 4000},
        {produto: "Tablet", valor: 2000},
        {produto: "Notebook", valor: 3800},

    ]
    
    res.render("pedidos", {pedidos : pedidos})

    pedidos : pedidos   

})

const port = 8080

app.listen(port, (error) => {

    if(error){

        console.log(`Ocorreu um erro: ${error}`)

    }else{

        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`)

    }

})



