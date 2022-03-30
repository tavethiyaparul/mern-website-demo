require('dotenv').config()
const express = require('express')
const app =express()
const { json } = require('express/lib/response')
const contRouter = require('./router/contactRouter')
const regRouter = require('./router/registerRouter')


require("./dbconnect")
const port =3500 ||process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/",contRouter)
app.use("/",regRouter)


app.listen(port,()=>{
    console.log('server start in port no',port);
})
