const Sequelize = require('sequelize');
const postgres = require('../database');

const Usuario = require('./Usuario');
const Postagem = require('./Postagem');

const Comentario = postgres.define('Comentario', {
    id_comentario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    texto: {
        type: Sequelize.STRING(300),
        allowNull: false
    }
}, {
    tableName: 'comentarios'
});

//FK da tabela usuarios
Usuario.hasMany(Comentario, {foreignKey: "id_usuario"});
Comentario.belongsTo(Usuario, {foreignKey: "id_usuario"});

//FK da tabela posts
Postagem.hasMany(Comentario, {foreignKey: "id_postagem"});
Comentario.belongsTo(Postagem, {foreignKey: "id_postagem"});

module.exports = Comentario;