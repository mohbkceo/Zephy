const User = require('../models/modele')

const {NotFoundERR, BAD_requestERR, CustomAPIERR, UNAuthorizideERR} = require('../error')

const ALLusers = async (req, res) => {
        const accounts  = await User.find({})
        res.status(200).json({ accounts })
}

const createAccount = async (req,res) => {
        const user = await User.create({...req.body})
        const token =  user.creatToke()
        res.status(201).json({ user:{name:user.firstname, laname:user.lastname, userId:user._id}, token })
}


const Login = async(req, res) => {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
                throw new UNAuthorizideERR('You did not have account with us!')
        }
        const ComparingPassword = await user.ComparePass(password)
        if(!ComparingPassword){
                throw new UNAuthorizideERR('Wrong Password!')
        }
        if(!email || !password) {
                throw new BAD_requestERR('You did not Provide Email or Password')
        }
        const token = user.creatToke()
        res.status(200).json({user:{name:user.firstname,laname:user.lastname, userId:user._id}, token})
}

const BlockOne = async(req, res) => {
        res.send('BLock / premuim / check')
}

const deletaccount = async(req, res) => { /// for deleting all content
    const accounts = await Account.deleteMany({})
    res.status(200).json({accounts})
}


module.exports = {createAccount, ALLusers, deletaccount, Login, BlockOne}