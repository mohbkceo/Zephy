const  {StatusCodes} = require('http-status-codes')
const  CustomAPIERR = require('./errClassHandler')  
class UNAuthorizideERR extends CustomAPIERR {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}
module.exports = UNAuthorizideERR