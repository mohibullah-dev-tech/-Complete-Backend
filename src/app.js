// server ke create krna 

const express = require("express")

const  app = express()

app.use(express.json()) // midelwere 
const notes = []

app.post('/notes',(req,res) =>{
    console.log(req.body)
})

module.exports =app