const CustomAPIERR = require('../error/errClassHandler')
const ErrorHandling  = (err, req, res, next) => {
    if(err instanceof CustomAPIERR){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: 'حدث خطأ يرجى اعادة المحاولة لاحقا'})
}

module.exports = ErrorHandling