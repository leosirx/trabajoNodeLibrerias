const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')
const { Library } = require('./library')

class Book extends Model {
  
}

Book.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING
  },
  author: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.STRING
  },
  library: {
    type: DataTypes.INTEGER
  },
  active: {
    type: DataTypes.BOOLEAN
  }
  
}, {
  sequelize: dbInstance,
  modelName: 'Book',
  createdAt: false,
  updatedAt: false,
  tableName: "Books"
})

Library.hasMany(Book, {
  foreignKey: "id"
})

Book.belongsTo(Library, {
  foreignKey: "library",
  as: "libreria"
})


module.exports = { Book }