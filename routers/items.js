const express = require('express');
const Item = require('../models/item');
const { mongoose } = require('mongoose');

const router = express.Router()

const items = []

// GET 
router.get('/', (req, res) => {
    Item.find().exec()
    .then(items => res.send(items))
    .catch(err => res.status(400).send())
})

// POST 
router.post('/', (req, res) => {
    const item = new Item(req.body)
    item.save()
        .then(r => res.send(r))
        .catch(err => res.status(400).send(err))
})

// GET 
router.get('/:id', (req, res) => {
    Item.findById(req.params.id).populate("owner").exec()
    .then(item => {
        if (item == null) res.status(404).send()
        else { res.send(item) }
    })
    .catch(err => res.status(400).send(err))
})

// PUT 
router.put('/:id', (req, res) => {
    let item = items.find(i => i.id==req.params.id)
    if (item) {
        // Update logic
        item.updatedAt = new Date().toISOString()
        item.name = req.body
    }
    res.status(404).json({'error':1})
})

// DELETE 
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id).exec()
    .then(result => res.status(204).send())
    .catch(err => res.status(404).json(err))
})


let unit = "aaa"

module.exports = router