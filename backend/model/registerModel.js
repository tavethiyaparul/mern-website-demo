const res = require('express/lib/response')
const mongoose = require('mongoose')
const jwt =require('jsonwebtoken')

const schmaregister = new mongoose.Schema({
    name:{
        type:String,
        default:null
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
    password:{
        type:String,
        required:true
    },
    tokens :[{
        token: {
          type: String, required: true
        }
      }]
})

schmaregister.methods.gencreateToken = async function () {
    try {
      const token = jwt.sign({ _id:this._id}, "mygod")
      this.tokens = this.tokens.concat({token})
      // console.log(this.tokens);
      await this.save()
      return token  
    } catch (error) {
      res.send(error)
      console.log("this error" + error)
    }
  }

module.exports = mongoose.model("register",schmaregister)