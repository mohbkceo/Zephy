const  {StatusCodes} = require('http-status-codes')
const  CustomAPIERR = require('./errClassHandler')  
class BAD_requestERR extends CustomAPIERR {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}
module.exports = BAD_requestERR