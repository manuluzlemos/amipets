const { usuarioService } = require('../services/usuario.service');

class UsuarioController{
    adicionar(){
        return (async (request, response) => {
            try {
                console.log("Adicionar");
                const { nome, username, senha, telefone, email } = request.body;
                const resultado = await usuarioService.registrarUsuario(nome, username, senha, telefone, email);
            
                response.json(resultado);
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }

    login(){
        return (async (request, response) => {
            try {
                const { username, senha } = request.body;
                const resultado = await usuarioService.logarUsuario(username, senha);
                
                response.json(resultado);

            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });        
    }

    consultar(){
        return (async (request, response) => {
            try {
                const { username } = request.body;
                const resultado = await usuarioService.retornarUsuario(username);
                
                response.json(resultado);
                
            } catch (error) {
                console.log(error);
                response.json({ error: error });
            }
        });
    }
}

const usuarioController = new UsuarioController();
module.exports = {
    usuarioController
};