const express = require('express');
const router = express.Router();

const operatorSchema = require('../model/ITOperators.model');
router.get('/', async (req, res) => {
    try{
        const result = await operatorSchema.find({}, {__v: 0})
        res.send(result);
    } catch(e){
        res.send(e.message);
    }
})

router.post('/', async (req, res) => {
    try{
        const admin = new operatorSchema(req.body);
        const result = await admin.save();
        res.send(result);
    } catch(e){
        res.send(e.message);
    }
});

router.get('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const result = await operatorSchema.findById(id , {__v: 0});
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const update = req.body;
        const result = await  operatorSchema.findByIdAndUpdate(id , update, {__v: 0});
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const result = await operatorSchema.findByIdAndDelete(id);
        res.send(result);
    } catch (e) {
        res.send(e.message);
    }
})

module.exports = router;