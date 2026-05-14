 const mongoose=require('mongoose')
 
 const marks=mongoose.Schema({
    marks_id:{type:Number,require:true, unique:true},
    Trainee_Id:{type:mongoose.Types.objectId,ref:"trainees"},
    Trade:{type:String,require:true},
    Module_Name:{type:String,require:true},
    Formative_Assessment:{type:Number,require:true},
    Summative_Assessment:{type:Number,require:true},
    Total_Marks:{type:Number,require:true},
 })
 const marks=mongoose.model("marks",marks)
  
 module.exports=marks