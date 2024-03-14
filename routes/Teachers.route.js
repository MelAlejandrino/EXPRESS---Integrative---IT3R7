const express = require('express');
const router = express.Router();

const teacherSchema = require('../model/Teachers.model');
router.get('/', async (req, res) => {
    try{
        const result = await teacherSchema.find({}, {__v: 0})
        res.send(result);
    } catch(e){
        res.send(e.message);
    }
})

router.post('/', async (req, res) => {
    try{
        const admin = new teacherSchema(req.body);
        const result = await admin.save();
        res.send(result);
    } catch(e){
        res.send(e.message);
    }
});

router.get('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const result = await teacherSchema.findById(id , {__v: 0});
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const update = req.body;
        const result = await  teacherSchema.findByIdAndUpdate(id , update, {__v: 0});
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const result = await teacherSchema.findByIdAndDelete(id);
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
})

module.exports = router;