const mongoose = require('mongoose');


const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 6
    },

    price: {
        type: Number,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
        
    },
    quantity: {
        type: Number,
        required: true,
        
    },
    
    createAt: {
        type: Date,
        default: new Date().toISOString()
    },
   
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

// Create model
const Item = mongoose.model('Item', itemSchema)

module.exports = Item