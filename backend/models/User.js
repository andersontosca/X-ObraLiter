const mongoose = require('../db/conn')
const { Schema } = mongoose

const User = mongoose.model(
  'User',
  new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },    
    uf: {
      type: String,
      required: true
    },
    surname: {
      type: String,      
    },
    password: {
      type: String,
      required: true
    }, 
    status: {
      type: Boolean,
      required: true
    },    

  }, {timestamps: true}),
)

module.exports = User
