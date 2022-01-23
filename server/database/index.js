const database = require('./database')
const Student = require('./models/students')
const Campus = require('./models/campuses')

//associations

Campus.hasMany(Student)
Student.belongsTo(Campus, {
    foreignKey: {
        allowNull:false
    }
})

module.exports = {
    database,
    Student,
    Campus
}