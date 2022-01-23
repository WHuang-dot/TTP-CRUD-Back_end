const router = require('express').Router()
const Student = require('../database/models/students')
const database = require('../database/database')

router.get('/', async (req, res) => {
    try {
        const students = await Student.findAll()
        res.status(200).send(students)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        res.send(student)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/', async(req, res) => {
    try {
        const newStudent = await Student.create(req.body)
        res.json(newStudent)
    } catch (error) {
        res.send(error.message)
    }
})

router.put('/', async(req, res) => {
    try {
        const updateStudent = await Student.update(req.body, { 
            where : { id : req.body.id },
            returning : true 
        });
        res.status(200).json({
            newData: updateStudent[1][0].dataValues
        })
    } catch (error) {
        res.send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const inputid = req.params.id;
        await Student.destroy({ where : { id : inputid } });
        res.status(200).json({
            outcome: `Deleted Sudent with id ${inputid}.`
        })
    } catch (error) {
        res.send(error.message)
    }
})


module.exports = router