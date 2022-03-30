const mongoose = require('mongoose')
// const {MONGO_URL} = require("dotenv")

const connect = mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true,
    useUnifiedTopology: true})
.then(() => {
    console.log("conect")
}).catch((err) => {
    console.log("not connected",err);
    console.error(err)
})

module.exports=connect