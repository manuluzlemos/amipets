const { usuarioController } = require('./controller/usuario.controller');
const { postagemController } = require('./controller/postagem.controller');
const { comentarioController } = require('./controller/comentario.controller');
const { salvoController } = require('./controller/salvo.controller');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get("/", (request, response) => {
    response.json({ status: 'testando'})
});

// Rotas de usuário
app.post("/usuario/cadastrar", usuarioController.adicionar());
app.post("/usuario/login", usuarioController.login());
app.post("/usuario/consultar", usuarioController.consultar());

// Rotas de postagem
app.post("/postagem/publicar", postagemController.publicar());
app.post("/postagem/mudar", postagemController.mudarStatus());
app.post("/postagem/listar", postagemController.listar());
app.post("/postagem/salvos", postagemController.listarSalvos());
app.post("/postagem/publicados", postagemController.listarPublicados());

// Rotas de comentário
app.post("/comentario/publicar", comentarioController.publicar());
app.post("/comentario/listar", comentarioController.listar());

// Rotas de postagens salvas
app.post("/salvos/salvar", salvoController.salvar());
app.post("/salvos/retirar", salvoController.retirar());
app.post("/salvos/verificar", salvoController.verificar());

module.exports = {
    app,
};