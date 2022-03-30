const express = require('express')
const app = express()
const User = require("../model/registerModel")
const bcrypt = require('bcrypt')
// app.get('/user',(req,res)=>{

// })

app.post('/signup',async(req,res) =>{
    try {
        const { name, email, password,conpassword } = req.body  
        const oldUser = await User.findOne({email})
        console.log(oldUser)
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        } 
       
    if(password == conpassword)
    {
        const  encryptedPassword = await bcrypt.hash(password,11)
        const userregi = await User({
            name,
            email,
            password:encryptedPassword,
        });

        const token = await userregi.gencreateToken()
        console.log(token);

        const register1 = await userregi.save()
        console.log(register1)
        res.send(register1)
    }
    else{
        console.log("password not matched");
        res.send("password not matched")
    }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

app.post('/signin',async(req,res) =>{
    const {email,password} = req.body
    try {
        const old = await User.findOne({email})
        const ismatch = await bcrypt.compare(password,old.password)
        const token = await old.gencreateToken()
    
        if(ismatch){
            console.log("login success");
            res.send(ismatch)
        }
        else{
          res.send ("not login")
        }

    } catch (error) {
        console.log(error);
        res.send(error)
    }

})
module.exports= app

