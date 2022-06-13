const routes = require("express").Router();//nativo do express, caminho que ele será executado em routes
const unhasControllers = require("../controllers/unhasControllers");//acessa o controllers

routes.get("/", unhasControllers.getAll);//listar tudo que tem na rota (cadastrado no banco)
routes.get("/unhas/:id", unhasControllers.getById);//rota para pegar o unhas por id e estou chamando a rota detalhes
routes.get("/criar", unhasControllers.criar);//rota de exibição da criação do unhas
routes.post("/criacao", unhasControllers.criacao);//rota de criacao dos filmes
routes.get("/editar/:id", unhasControllers.editar1);//rota de validação se existe o unhas para eu editar
routes.post("/editar/:id", unhasControllers.editar);//rota de edição
routes.get("/deletar/:id", unhasControllers.deletar);//rota para deletar o unhas
routes.post("/deletar/:id", unhasControllers.deletar1);//rota para deletar o unhas

module.exports = routes;//exporto ela para qualquer caminho