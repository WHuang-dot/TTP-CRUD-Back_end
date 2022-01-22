const Sequelize = require('sequelize')
const database = require('../database')

const Student = database.define('student', {
    //id, firstName, lastName, email, image, gpa

    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey : true,
        notEmpty: true
    },

    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue : 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
    },
    gpa : {
        type : Sequelize.DOUBLE,
        validate : {
            min : 0.0,
            max : 4.0,
            isDecimal : true
        }
    },
})

module.exports = Student