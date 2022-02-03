const postgres = require('../database');

const Usuario = require('../models/Usuario');
const Postagem = require('../models/Postagem');
const Comentario = require('../models/Comentario');

class ComentarioService{
    async publicarComentario(texto, id_usuario, id_postagem){
        
        const usuario = await Usuario.findOne({ where: {id_usuario: id_usuario} });
        if(usuario === null)
            return { error: 'Usuário não existe', status: false };

        const postagem = await Postagem.findOne({ where: {id_postagem: id_postagem} });
        if(postagem === null)
            return { error: 'Postagem não existe', status: false };
        
        const comentario = await Comentario.create({
            texto,
            id_usuario,
            id_postagem
        });

        return { comentario: comentario };
    }

    async listarComentarios(id_postagem){
        const [comentarios, ] = await postgres.query(`SELECT comentarios.*, username FROM comentarios, usuarios WHERE comentarios.id_usuario = usuarios.id_usuario AND comentarios.id_postagem = ${id_postagem}`);
        
        return { comentarios: comentarios };        
    }   
}

const comentarioService = new ComentarioService();

module.exports = {
    comentarioService
};