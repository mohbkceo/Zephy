const mongoose = require('mongoose')


const ScinariosSchema = new mongoose.Schema({
    Subject: {
        type:String,
        required: [true, 'Must Provide Subject'],
        minlength: 5
    },
    Title: {
        type:String,
        required: [true, 'Must Provide Title'],
        maxlength: 20
    },
    createdBy: {
        type:mongoose.Types.ObjectId,
        ref: 'Account',
        required: true,
        maxlength: 20
    },
    PhotosURL: {
        type:String,
    },
   

}, {timestemps:true})

module.exports = mongoose.model('Scinareo', ScinariosSchema)