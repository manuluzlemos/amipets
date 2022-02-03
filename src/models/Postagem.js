const Sequelize = require('sequelize');
const postgres = require('../database');

const Usuario = require('./Usuario');

const Postagem = postgres.define('Postagem', {
    id_postagem: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    texto: {
        type: Sequelize.STRING(500)
    },
    especie: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    status: {
        type: Sequelize.STRING(30)
    },
    imagem: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
}, {
    tableName: 'postagens'
});

//FK da tabela usuarios
Usuario.hasMany(Postagem, {foreignKey: "id_usuario"});
Postagem.belongsTo(Usuario, {foreignKey: "id_usuario"});

module.exports = Postagem;