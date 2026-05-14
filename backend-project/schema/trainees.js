 const mongoose=require('mongoose')
 
 const trainee=mongoose.Schema({
    Trainee_Id:{type:Number,required:true, unique:true},
    FirstNames:{type:String,required:true},
    LastName:{type:String,required:true},
    Gender:{type:String,required:true},
    Trade_Id:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"trade"

    },
 })
 const trainees=mongoose.model("trainees",trainee)
  
 module.exports=trainees