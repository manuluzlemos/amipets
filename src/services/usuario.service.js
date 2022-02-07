const Usuario = require('../models/Usuario');

class UsuarioService{
    async registrarUsuario(nome, username, senha, telefone, email){
        const consulta = Usuario;
            
        if(await consulta.findOne({where: {username: username}}))
            return { error: 'Username já existe', registro: false};

        if(await consulta.findOne({where: {email: email}}))
            return { error: 'Email já existe', registro: false };

        const usuario = await Usuario.create({
            nome,
            username,
            senha,
            telefone,
            email
        });

        return { usuario: usuario, registro: true };
    }

    async logarUsuario(username, senha){
        const usuario = await Usuario.findOne({where: { 
            username: username,
            senha: senha
        }});

        if(usuario.length === 0)
            return { login: false };
        
        usuario.senha = undefined;
        
        return { usuario: usuario };        
    }

    async retornarUsuario(username){
        const usuario = await Usuario.findOne({where: { 
            username: username
        }});

        if(usuario === null)
            return { status: false };
        
        usuario.senha = undefined;
        
        return { usuario: usuario };        
    }   
}


const usuarioService = new UsuarioService();

module.exports = {
    usuarioService
};