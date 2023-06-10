const { Sequelize } = require('sequelize')

const dbInstance = new Sequelize({
  host: "localhost",
  database: "proyecto-libros",
  username: "root",
  password: "proyectolol123",
  port: 3306,
  dialect: "mysql"
})

module.exports = { dbInstance }