const router = require('express').Router()
const Campus = require('../database/models/campuses')
const Student = require('../database/models/students')
const database = require('../database/database')

router.get('/', async (req, res) => {
    try {
        const campuses = await Campus.findAll()
        res.status(200).send(campuses)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const campuses = await Campus.findByPk(req.params.id)
        res.send(campuses)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/', async(req, res) => {
    try {
        const newCampus = await Campus.create(req.body)
        res.json(newCampus)
    } catch (error) {
        res.send(error.message)
    }
})

router.put('/', async(req, res) => {
    try {
        const updateCampus = await Campus.update(req.body, { 
            where : { id : req.body.id },
            returning : true 
        });
        res.status(200).json({
            newData: updateCampus[1][0].dataValues
        })
    } catch (error) {
        res.send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const inputid = req.params.id;
        Campus.destroy({ where : { id : inputid } });
        Student.update({ campusid : null }, { where : { campusid : inputid }
        });
        res.status(200).json({
            outcome: `Deleted Campus with ${inputid}.`
        })
    } catch (error) {
        res.send(error.message)
    }
})


router.get('/:id/students', async(req, res) => {
    try {
        const inputid = req.params.id;
        const students = await Student.findAll({where : { campusId : inputid }});
        res.status(200).json(students);
    } catch (error) {
        res.send(error.message)
    }
})



module.exports = router
