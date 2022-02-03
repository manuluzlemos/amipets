const Sequelize = require('sequelize');
const postgres = require('../database');

const Usuario = require('./Usuario');
const Postagem = require('./Postagem');

const Salvo = postgres.define('Postagens', {
    id_salvo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    tableName: 'salvos'
});

//FK da tabela usuarios
Usuario.hasMany(Salvo, {foreignKey: "id_usuario"});
Salvo.belongsTo(Usuario, {foreignKey: "id_usuario"});

//FK da tabela posts
Postagem.hasMany(Salvo, {foreignKey: "id_postagem"});
Salvo.belongsTo(Postagem, {foreignKey: "id_postagem"});

module.exports = Salvo;