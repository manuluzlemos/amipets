// Exporta a conexão com o banco de dados
require('dotenv/config');

const { Sequelize } = require('sequelize');
postgres = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})
postgres.sync().then(()=>{
    console.log('connected in database')
}).catch((err)=>{
    console.log(err)
})

module.exports = postgres;