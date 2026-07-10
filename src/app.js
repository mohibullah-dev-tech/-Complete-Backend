// server ke create krna 

const express = require("express")

const  app = express()

app.use(express.json()) // midelwere 
const notes = []

app.post('/notes',(req,res) =>{
    // console.log(req.body)
    notes.push(req.body)
    res.status(201).json({
        message:"note created successfully"
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetchde successfully",
        notes:notes

    })
})


module.exports =app