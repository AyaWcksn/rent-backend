const knex = require('knex')
const env = require('dotenv')
env.config()

knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DB_PORT
  }
})
