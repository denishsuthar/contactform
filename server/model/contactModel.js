import mongoose from "mongoose";
import validator from "validator";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Name"],
        trim:true
    },
    email:{
        type:String,
        required:[true, "Please Enter Email"],
        validate:validator.isEmail,
    },
    mobileNumber:{
        type:Number,
        required:[true, "Please Enter Mobile Number"],
    },
    message:{
        type:String,
        required:[true, "Please Enter Message"],
        trim:true
    },
})

export const Contact = mongoose.model('Contact', contactSchema);