

const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  username : {

    type:String,
    required:true
  },
  fullname : {

    type:String,
    required:true
  },
  email : {

    type:String,
    required:true
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "owner", "client"]
  },
  
  password: {
    type: String, 
    required: true},
   interests: [String]
})
const User = mongoose.model('User', userSchema)

module.exports = User;