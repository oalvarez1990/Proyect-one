//Connecting to db thanks to Sequelize
const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const random =() => {
    const result = Math.floor(Math.random()*(999999 - 100000)+100000)
    return result
}

const User = db.define('user', {
    id: { 
        primaryKey: true,
        autoIncrement: true, 
        type: DataTypes.INTEGER , 
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING , 
        unique: false,
        allowNull: false
    },
    accountNumber:{
        type: DataTypes.INTEGER , 
        unique: true,
        allowNull: false,
        defaultValue: random()
    },
    password:{
        type: DataTypes.STRING , 
        allowNull: false
    },
    amount:{
        type: DataTypes.FLOAT , 
        allowNull: false,
        defaultValue: 1000
    },
    status:{
        type : DataTypes.STRING,
        defaultValue: 'available'
    }
})

module.exports = {User}
