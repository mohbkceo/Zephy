const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const accountSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:false
    },
    lastname: {
        type:String,
        required:false
    },
    verification: {
        type:String,
        required:false

    },
   email: {
       type:String,
       required: false,
       match:[
           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
           'Please provide a valid email',
       ],
       unique: true,
   },
    password:{
        required: false,
        type:String,
        minlength: 8,
    },
    isCheaked: {
        type: Boolean,
        default: false,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isPremuiem: {
        type: Boolean,
        default: false,
    },
})


accountSchema.methods.creatToke = function (){
    return jwt.sign({name:this.firstname, laname:this.lastname, userId:this._id}, process.env.TOKEN_KEY, {expiresIn: process.env.JWT_LIFETIME})
}

accountSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


accountSchema.methods.ComparePass = async function(passwordProvider){
    const isMatch = await bcrypt.compare(passwordProvider, this.password)
    return isMatch
}

module.exports = mongoose.model('Account', accountSchema)