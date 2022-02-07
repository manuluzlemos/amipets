const { postagemService } = require('../services/postagem.service');

class PostagemController{
    publicar(){
        return (async (request, response) => {
            try {
                const { texto, especie, categoria, status, imagem, id_usuario } = request.body;
                const resultado = await postagemService.cadastrarPostagem(texto, especie, categoria, status, imagem, id_usuario);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }

    mudarStatus(){
        return (async (request, response) => {
            try {
                const { id_postagem, novo_status } = request.body;
                const resultado = await postagemService.mudarStatus(id_postagem, novo_status);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }

    listar(){
        return (async (request, response) => {
            try {
                const categoria = request.body.categoria || null;
                const status = request.body.status || null;
                const especie = request.body.especie || null;
                const resultado = await postagemService.listarPostagens(categoria, status, especie);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }

    listarSalvos(){
        return (async (request, response) => {
            try {
                const { id_usuario } = request.body;
                const resultado = await postagemService.listarPostagensSalvas(id_usuario);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }

    listarPublicados(){
        return (async (request, response) => {
            try {
                const { id_usuario } = request.body;
                const resultado = await postagemService.listarPostagensPublicadas(id_usuario);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }


}

const postagemController = new PostagemController();

module.exports = {
    postagemController
};
