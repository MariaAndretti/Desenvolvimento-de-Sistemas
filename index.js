const express = require('express')

let app = express()
app.use(express.json())


let Livros = {
    1: {
        nome: "Vermelho,Branco e Sangue Azul",
        descricao: "Em branco",
        autor: "Casey Macquiston"
    },
    2: {
        nome: "Percy Jackson",
        descricao: "Em branco",
        autor: "Rick Riordan"
    },
    };

    let LivrosContador = 2;

app.get('/', (req, res) => {
    let message = {
        success: true
    }

    res.send(JSON.stringify(message));
});

//INDEX
app.get('/livros', (req, res)=> {

    let livros = Object(Livros)

    res.send(JSON.stringify(livros));

});

// GET
app.get('/livro/:id', (req,res)=> {
    const {id} = req.params;
    let livro = Object(Livros[id]);
    
    res.send(JSON.stringify(livro));
});

//Create 
app.post('/livro/', (req,res)=> {
    let { nome, descricao, autor} = req.body;
    let novoLivro = {
        nome: nome,
        descricao: descricao,
        autor: autor,
    };

    LivrosContador += 1;
    Livros[LivrosContador] = novoLivro;

    res.send(
        JSON.stringify({
        success: true,
        livro: novoLivro,

    }),
);
});

app.put('/livro/:id', (req, res) => {
    let {id} = req.params
    let livro = Object(Livros[id])
    let {nome, descricao, autor} = req.body

    if(nome !== undefined) livro.nome = nome;
    if(descricao !== undefined) livro.descricao = descricao;
    if(autor !== undefined) livro.autor = autor;

    Livros[id] = livro
    res.send(JSON.stringify({
        success: true,
        livro: livro,
    }),
);
});

app.delete('/livro/:id', (req, res)=> {
    const {id} = req.params;
    Livros[id] = null;

    res.send(
        JSON.stringify({
            success: true,
        }),
    );
});


app.listen(3000, ()=>{
    console.log('App rodando na porta 3000');
});








//5 rotas
// index -> GET
// get -> GET
// create -> POST
// update -> PUT
// delete -> DELETE