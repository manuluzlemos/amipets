const { comentarioService } = require('../services/comentario.service');

class ComentarioController{
    publicar(){
        return (async (request, response) => {
            try {
                const { texto, id_usuario, id_postagem } = request.body;
                const resultado = await comentarioService.publicarComentario(texto, id_usuario, id_postagem);
            
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
                const { id_postagem } = request.body;
                const resultado = await comentarioService.listarComentarios(id_postagem);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }
}

const comentarioController = new ComentarioController();

module.exports = {
    comentarioController
};
