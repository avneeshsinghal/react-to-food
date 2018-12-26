const express = require('express');
const router = express.Router();

//Item Model 
const Item = require('../../models/Item');

router.get('/', (req,res) => {
    Item.find({done:false})             //retruns promise
    .sort({_id: 1})
    .then(items => res.json(items))
});

router.post('/', (req,res) => {
    const newItem = new Item(req.body);
    newItem.save().then(item => res.json(item));
});

router.put('/:id', (req,res) => {
    Item.findById(req.params.id)
    .then(item => item.updateOne({done:true}).then( () => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});

module.exports = router;