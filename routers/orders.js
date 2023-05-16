const express = require('express');
const Order = require('../models/order');
const { mongoose } = require('mongoose');

const router = express.Router()

const orders = []

// GET 
router.get('/', (req, res) => {
    Order.find().exec()
    .then(orders => res.send(orders))
    .catch(err => res.status(400).send())
})

// POST 
router.post('/', (req, res) => {
    const order = Order.create(req.body)
    .then(r => res.send(r))
    .catch(err => res.status(400).send(err))
})

// GET 
router.get('/:id', (req, res) => {
    Order.findById(req.params.id).populate("owner").exec()
    .then(order => {
        if (order == null) res.status(404).send()
        else { res.send(order) }
    })
    .catch(err => res.status(400).send(err))
})

// PUT 
router.put('/:id', (req, res) => {
    let order = orders.find(i => i.id==req.params.id)
    if (order) {
        // Update logic
        order.updatedAt = new Date().toISOString()
        order.name = req.body
    }
    res.status(404).json({'error':1})
})

// DELETE 
router.delete('/:id', (req, res) => {
    Order.findByIdAndDelete(req.params.id).exec()
    .then(result => res.status(204).send())
    .catch(err => res.status(404).json(err))
})




module.exports = router;
