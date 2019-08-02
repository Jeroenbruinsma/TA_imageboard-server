const Sequelize = require('sequelize')
const sequelize = require('../db')

const Teeth = sequelize.define('image', {
    url: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
}, {
        timestamps: false,
        tableName: 'image'
    })
   
module.exports = Teeth