const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {studentmodel}=require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nimmyroz:roz206@cluster0.svkepzi.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let student=new studentmodel(input)
    console.log(student)
    student.save()
    res.send({"status":"ADD"})
})

app.get("/view",(req,res)=>{
    studentmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
app.listen(8080,()=>{
    console.log("Server Started")
})