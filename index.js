const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());



  let unhas = undefined;

const listaUnhas = [
    {
        estilo: "Bailarina",

        imagem: "/img/Bailarina.jpg",
    },
    {
        estilo: "Stileto",

        imagem: "/img/Stileto.jpg",
    },
    {
        estilo: "Quadrada",

        imagem:"/img/Quadrada.jpg" ,
    },
    {
        estilo: "Batom",

        imagem: "/img/Batom.jpg",
    },
    {
        estilo: "Redonda",

        imagem: "/img/Redonda.jpg",
    },
    {
        estilo: "Amendoada",

        imagem: "/img/Amendoada.jpg",
    },
    {
        estilo: "Oval" ,

        imagem: "/img/Oval.jpg",
    },
    {
        estilo: "Squoval",

        imagem:"/img/Squoval.jpg" ,
    },
    {
        estilo: "Coffin",

        imagem:"/img/Coffin.jpg" ,
    },
    {
        estilo: "Pico da Montanha",

        imagem: "/img/Pico.jpg",
    }

];

// rotas
app.get("/index", (req, res)=> {
    res.render("index");
});




app.get("/", (req, res) => {
    res.render("index", {listaUnhas});

});

app.post/*post pq envio dados*/("/create", (req, res)=>{
    const unhas = req.body;
    
  
    unhas.id = listaUnhas.length +1;
    listaUnhas.push(unhas);
    res.redirect("/#cards")

});


app.listen(port, () => 
console.log(`Servidor rodando em http://localhost:${port}`));
