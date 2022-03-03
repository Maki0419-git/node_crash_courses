
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleWare = (err, req, res, next) => {
    let customError = {
        //set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later'

    }
    // if (err instanceof CustomAPIError) {
    //     return res.status(err.statusCode).json({ msg: err });
    // }
    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please enter another value`;
        customError.statusCode = StatusCodes.BAD_REQUEST;
    }
    return res.status(customError.statusCode).json(customError.msg);
    //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });

}

module.exports = errorHandlerMiddleWare;