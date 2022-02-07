const Usuario = require('../models/Usuario');
const Postagem = require('../models/Postagem');
const Salvo = require('../models/Salvo');

class SalvoService{
    async salvarPostagem(id_usuario, id_postagem){
        
        const usuario = await Usuario.findOne({ where: {id_usuario: id_usuario} });
        if(usuario === null)
            return { error: 'Usuário não existe', status: false };

        const postagem = await Postagem.findOne({ where: {id_postagem: id_postagem} });
        if(postagem === null)
            return { error: 'Postagem não existe', status: false };
        
        const salvo = await Salvo.create({
            id_usuario,
            id_postagem
        });

        return { salvo: salvo };
    }

    async retirarPostagem(id_usuario, id_postagem){
        
        const usuario = await Usuario.findOne({ where: {id_usuario: id_usuario} });
        if(usuario === null)
            return { error: 'Usuário não existe', status: false };

        const postagem = await Postagem.findOne({ where: {id_postagem: id_postagem} });
        if(postagem === null)
            return { error: 'Postagem não existe', status: false };
        
        const salvo = await Salvo.findOne({where: {
                id_usuario: id_usuario,
                id_postagem: id_postagem
            }
        });

        await salvo.destroy();
        return { salvo: salvo };
    }

    async verificarSalvo(id_usuario, id_postagem){
        
        const salvo = await Salvo.findOne({ where: {id_usuario: id_usuario, id_postagem: id_postagem} });
        if(salvo === null)
            return { salvo: false };

        return { salvo: true };
    }
}

const salvoService = new SalvoService();

module.exports = {
    salvoService
};