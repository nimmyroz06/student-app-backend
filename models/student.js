const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "adm":{type:String,required:true},
        "roll":{type:String,required:true},
        "pn":{type:String,required:true},
        "cl":{type:String,required:true},
        "dob":{type:String,required:true},
        "e":{type:String,required:true},
        "p":{type:String,required:true},
        "cp":{type:String,required:true},
    }
)
let studentmodel=mongoose.model("student",schema);
module.exports={studentmodel}