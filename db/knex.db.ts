const knex = require('knex')

const CONFIG = {
    HOST: process.env.database_host || 'f80b6byii2vwv8cx.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    USER:  process.env.database_user || 'xqbs8ync3v86eniw',
    PASSWORD: process.env.database_password,
    DATABASE: process.env.database || 'isvdd9uinn5y2d1v',
    PORT: process.env.database_port ||  3306
}

const knexDb = knex({
    client: 'mysql',
    connection: {
        host: CONFIG.HOST,
        user: CONFIG.USER,
        password: CONFIG.PASSWORD,
        database: CONFIG.DATABASE,
        port: CONFIG.PORT,
        charset: 'utf8mb4'
    }
})

export default knexDb
