const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

class Library extends Model {
  
}

Library.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.STRING
  },
  active: {
    type: DataTypes.BOOLEAN
  }
  
}, {
  sequelize: dbInstance,
  modelName: 'Library',
  createdAt: false,
  updatedAt: false,
  tableName: "Librarys"
  
})

module.exports = { Library }