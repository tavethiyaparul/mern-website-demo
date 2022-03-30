const ctrlContact = require("../controller/contactController")
const express = require("express")
const app = express()

app.post("/contact",ctrlContact.savedata)

module.exports = app