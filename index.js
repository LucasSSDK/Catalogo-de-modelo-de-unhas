const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());



  let unhas = undefined;

const listaUnhas = [
    {
        estilo: "Bailarina",

        imagem: "/img/Bailarina.jpg",

        caracteristicas: "A bailarina é quase uma evolução da unha stiletto, pois possui as mesmas características básicas de uma unha alongada e afunilada nas laterais, a diferença é que a stiletto tem ponta arredondada e a bailarina tem ponta quadrada." ,
    },
    {
        estilo: "Stileto",

        imagem: "/img/Stileto.jpg",

        caracteristicas:"A unha stiletto é um formato de unha que tem como característica a sua curvatura em V, o que faz com que a unha vá afunilando à medida em que vai chegando nas pontas. As pontas das unhas podem ter um formato mais arredondado ou com o pontiagudo mais acentuado, tudo vai depender do seu gosto.",
    },
    {
        estilo: "Quadrada",

        imagem:"/img/Quadrada.jpg" ,

        caracteristicas:"Este formato é levemente mais pontudo que o oval e indica formato característico de mulheres vaidosas e autoconfiantes, sempre com unhas mais impecáveis. A unha quadrada é o formato usado pelas mulheres modernas e urbanas. São mulheres com perfil de liderança, fortes e corajosas. É a unha bem pontuda na ponta.",
    },
    {
        estilo: "Batom",

        imagem: "/img/Batom.jpg",

        caracteristicas:"Estamos falando das lipstick nails, ou unhas batom, na tradução. É um mix das unhas retangulares e stiletto, só que com as pontas assimétricas. Daí a origem do nome, pois ela lembra a bala de um batom.",
    },
    {
        estilo: "Redonda",

        imagem: "/img/Redonda.jpg",

        caracteristicas:" Elas ficam ótimas tanto para quem gosta de tamanhos curtos quanto para quem ama o visual longo. Este formato é caracterizado pelo seu desenho de “U”, sem pontas afiadas ou quebradiças.",
    },
    {
        estilo: "Amendoada",

        imagem: "/img/Amendoada.jpg",

        caracteristicas:"As unhas Almond são um meio termo entre stiletto e oval. O seu formato é levemente ovalado com uma pequena ponta, igual ao formato de uma amêndoa. Você pode usar tanto a sua unha natural como uma postiça.",
    },
    {
        estilo: "Oval" ,

        imagem: "/img/Oval.jpg",

        caracteristicas:"A unha oval leva um formato mais arredondado na ponta e unha amendoada lembra mais, como o nome diz, uma amêndoa e tem as pontas mais afinada. Na hora de lixar e cortar, cuidado para não deixar torta, pois corre mais risco de lascar, principalmente a oval que tem a ponta mais fina.",
    },
    {
        estilo: "Squoval",

        imagem:"/img/Squoval.jpg" ,

        caracteristicas:" Acompanham o desenho natural das unhas, o formato de unha arredondado não apresenta pontinhas que engancham ou lascam com facilidade, por isso, a unha redonda possui a vantagem.",
    },
    {
        estilo: "Coffin",

        imagem:"/img/Coffin.jpg" ,

        caracteristicas:"Esse formato pode ser considerado irmão do stiletto, já que vão do comprimento médio a longo e sua principal característica é a ponta, que, diferente das finíssimas stiletto, é mais geométrica. Isso torna esse estilo muito mais prático para o dia-a-dia",
    },
    {
        estilo: "Pico da Montanha",

        imagem: "/img/Pico.jpg",

        caracteristicas:"O formato denominado pico de montanha é considerado como um dos estilos mais ousados. Para atingir esse formato, é preciso deixar a unha bem pontuda, mas manter a base larga. O formato pico de montanha pode ser confundido com a unha no modelo stiletto.",
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
