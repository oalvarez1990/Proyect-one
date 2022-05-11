
const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const Transfer = db.define('transfers', {
    id: { 
        primaryKey: true,
        autoIncrement: true, 
        type: DataTypes.INTEGER , 
        unique: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER , 
        unique: false,
        allowNull: false
    },
    senderUserId:{
        type: DataTypes.INTEGER ,
        allowNull: false

    },
    receiverUserId:{
        type: DataTypes.INTEGER , 
        allowNull: false
    }    
})

module.exports = {Transfer}
//endopoint transfer in other count