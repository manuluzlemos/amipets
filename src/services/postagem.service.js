const postgres = require('../database');

const Postagem = require('../models/Postagem');
const Usuario = require('../models/Usuario');

class PostagemService{
    async cadastrarPostagem(texto, especie, categoria, status, imagem, id_usuario){
        const usuario = await Usuario.findOne({where: {id_usuario: id_usuario}});
            
        if(usuario === null)
            return { status:  'Usuário não existe'};
        
        const postagem = await Postagem.create({
            texto,
            especie,
            categoria,
            status,
            imagem,
            id_usuario
        });

        return { postagem: postagem };
    }

    async mudarStatus(id_postagem, novo_status){
        const postagem = await Postagem.findOne({ where: { id_postagem: id_postagem} })

        if(postagem === null)
            return { status: 'Postagem não encontrado'};

        postagem.status = novo_status;
        await postagem.save({ fields: ['status'] });
        return { status: 'Mudança de status da postagem efetuada' };
    }

    async listarPostagens(categoria, status, especie){
        let where = '';

        if(categoria !== null)
            where += ` AND categoria = '${categoria}' `;
        
        if(status !== null)
            where += ` AND status = '${status}' `;

        if(especie !== null)
            where += ` AND especie = '${especie}' `;

        //query retorna os resultados do select e os metadados
        const [postagens, ] = await postgres.query(`SELECT postagens.*, username FROM postagens, usuarios WHERE postagens.id_usuario = usuarios.id_usuario ${where}`);
        return { postagens : postagens };        
    }

    async listarPostagensSalvas(id_usuario){
        const where = `WHERE salvos.id_usuario = usuarios.id_usuario AND salvos.id_postagem = postagens.id_postagem AND salvos.id_postagem = ${id_usuario}`;
        const [postagens, ] = await postgres.query(`SELECT postagens.*, username FROM postagens, usuarios, salvos ${where}`);
        
        return { postagens : postagens };
    }
}

const postagemService = new PostagemService();

module.exports = {
    postagemService
};