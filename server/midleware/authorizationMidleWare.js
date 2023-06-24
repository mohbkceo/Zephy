const jwt  = require('jsonwebtoken')
const { UNAuthorizideERR} = require('../error')

const auth = async (req, res, next) => {
    const AuthHeaders  = req.headers.authorization
    if(!AuthHeaders || !AuthHeaders.startsWith('Bearer ')){
        throw new UNAuthorizideERR('Invakid Token!')
    }
    const token = AuthHeaders.split(' ')[1]
    try {
        const decode = jwt.verify(token, process.env.TOKEN_KEY)
        const {name, laname, userId} = decode
        req.user = {name, laname, userId}
        next()
    } catch (error) {
        throw new UNAuthorizideERR('Access faild!')
    }
}
module.exports = auth