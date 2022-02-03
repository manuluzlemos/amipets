const Sequelize = require('sequelize');
const postgres = require('../database');

const Usuario = postgres.define('Usuario', {
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    username: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(20)
    },
    email: {
        type: Sequelize.STRING(100),
    }
}, {
    tableName: 'usuarios'
});

module.exports = Usuario;