const database = require('./database')
const Student = require('./models/students')
const Campus = require('./models/campuses')

//associations

Campus.belongsToMany(Student, {through: 'Teacher_Student'})
// Student.belongsToOne(Campus, {through: 'Campus_Students'})

module.exports = {
    database,
    Student,
    Campus
}