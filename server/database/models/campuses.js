const Sequelize = require('sequelize')
const database = require('../database')

const Campus = database.define('campus', {
    //id, name, iamge, adress, description

    id : {
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement: true,
        primaryKey : true,
        notEmpty: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull : false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue : 'https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png'
    },
    address: {
        type: Sequelize.STRING,
        allowNull : false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT,
    },
})

module.exports = Campus;