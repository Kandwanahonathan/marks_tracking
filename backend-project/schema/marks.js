 const mongoose=require('mongoose')
 
 const markSchema=mongoose.Schema({
    marks_id:{type:Number,required:true, unique:true},
    Trainee_Id:{type:mongoose.Schema.Types.ObjectId, ref:"trainees", required:true},
    Trade:{type:String,required:true},
    Module_Name:{type:String,required:true},
    Formative_Assessment:{type:Number,required:true},
    Summative_Assessment:{type:Number,required:true},
    Total_Marks:{type:Number,required:true},
 })
 const marks=mongoose.model("marks",markSchema)
  
 module.exports=marks