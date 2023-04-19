import {catchAsyncError} from "../middelware/catchAsyncError.js"
import ErrorHandler from "../utils/ErrorHandler.js"
import { Contact } from "../model/contactModel.js"


// Create Entry
export const createEntry = catchAsyncError(async(req, res, next)=>{
    const {name, email, mobileNumber, message} = req.body;
    if(!name || !email || !mobileNumber || !message) return next(new ErrorHandler("Please Fill All Fields", 400));

    const form = await Contact.create({
        name, email, mobileNumber, message
    });

    res.status(201).json({
        success:true,
        form,
    })
})