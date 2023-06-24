var {StatusCodes, StatusCodes} =  require('http-status-codes') 
class CustomAPIERR extends Error {
    constructor(message){
        super(message)
       this.statusCode= StatusCodes.INTERNAL_SERVER_ERROR
    }
}
module.exports = CustomAPIERR