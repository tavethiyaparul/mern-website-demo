const mongoose = require('mongoose')
const contactSchama = new mongoose.Schema({
    fullname:{
        type:String,
        default:null
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        default:null,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new error("email is not valide")
            }
        }
    },
    msg:{
        type:String,
        default:null
    },
})

module.exports=mongoose.model("contact",contactSchama)