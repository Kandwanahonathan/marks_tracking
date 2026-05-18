const mongoose=require('mongoose')
const express=require('express')
const marks=require('../schema/marks')
const router= express.Router()

router.post('/marks', async(req,res)=>{
   try {
    if (!marks_id || !Trainee_Id || !Trade || !Module_Name || !Formative_Assessment || !Summative_Assessment || !Total_Marks) {
        return res.status(403).json({message:"fill out the missing"})
    }
     const {marks_id,
         Trainee_Id,
         Trade,
         Module_Name,
         Formative_Assessment,
         Summative_Assessment,
         Total_Marks}=req.body
 
         const addMark= await marks.create({marks_id,
         Trainee_Id,
         Trade,
         Module_Name,
         Formative_Assessment,
         Summative_Assessment,
         Total_Marks})
 
         return res.status(201).json({message:"mark created",insert:addMark})
   } catch (err) {
    console.log(err);
    
     return res.status(500).json(err)
   }
})