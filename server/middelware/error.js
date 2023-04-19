import ErrorHandler from "../utils/ErrorHandler.js";

const ErrorMiddelware = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internel Server Error";

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}

export default ErrorMiddelware;