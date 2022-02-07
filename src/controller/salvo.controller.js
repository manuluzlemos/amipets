const { salvoService } = require('../services/salvo.service');

class SalvoController{
    salvar(){
        return (async (request, response) => {
            try {
                const { id_usuario, id_postagem } = request.body;
                const resultado = await salvoService.salvarPostagem(id_usuario, id_postagem);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }

    retirar(){
        return (async (request, response) => {
            try {
                const { id_usuario, id_postagem } = request.body;
                const resultado = await salvoService.retirarPostagem(id_usuario, id_postagem);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }

    verificar(){
        return (async (request, response) => {
            try {
                const { id_usuario, id_postagem } = request.body;
                const resultado = await salvoService.verificarSalvo(id_usuario, id_postagem);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }
}

const salvoController = new SalvoController();

module.exports = {
    salvoController
};
