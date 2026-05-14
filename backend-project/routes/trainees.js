const express=require('express')
const router=express.Router()
const trainees=require('../schema/trainees');

router.post('/InsertTrainees',async (req,res)=>{
   try {
     const{Trainee_Id,FirstNames,LastName,Gender,Trade_Id}=req.body
     if (!Trainee_Id || !FirstNames || !LastName || !Gender || !Trade_Id) {
         return res.status(403).json({message:"fill out missing"})
     }
     const insert=await trainees.create({
         Trainee_Id,FirstNames,LastName,Gender,Trade_Id
     })
  return res.status(201).json({message:"trainee inserted successfully",insert:insert})
   } catch (err) {
    console.log(err);
    res.status(500).json({Error:err})
    
   }
})



module.exports=router