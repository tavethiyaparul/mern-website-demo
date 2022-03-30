const Contact = require('../model/contactModel')

exports.savedata= async function (req,res){
    try {
    console.log(req.body);
    const data = await Contact.create(req.body)
    res.send(data) 
    } catch (error) {
        console.log(error);
    }
}

