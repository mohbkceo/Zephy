const  {StatusCodes} = require('http-status-codes')
const  CustomAPIERR = require('./errClassHandler')  
class NotFoundERR extends CustomAPIERR {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}
module.exports = NotFoundERR