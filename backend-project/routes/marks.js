const mongoose=require('mongoose')
const express=require('express')
const marks=require('../schema/marks')
const router= express.Router()

router.post('/marks', async(req,res)=>{
   try {
   
     const {marks_id,
         Trainee_Id,
         Trade,
         Module_Name,
         Formative_Assessment,
         Summative_Assessment,
         Total_Marks}=req.body

          if (!marks_id || !Trainee_Id || !Trade || !Module_Name || !Formative_Assessment || !Summative_Assessment || !Total_Marks) {
        return res.status(403).json({message:"fill out the missing"})
    }
 
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

// select part for marks

router.get('/markSelect', async(req,res)=>{
    try {
        const select= await marks.find().populate('Trainee_Id')
        return res.status(200).json({succcess:true , select:select})
    } catch (err) {
        console.log(err);
    
     return res.status(500).json(err)
    }
})

// updates part for marks

router.put('/updateMarks/:_id', async(req,res)=>{
    try {
        const {_id}=req.params
        
     const {marks_id,
         Trainee_Id,
         Trade,
         Module_Name,
         Formative_Assessment,
         Summative_Assessment,
         Total_Marks}=req.body

        const updates=await marks.findByIdAndUpdate(_id,{marks_id,
         Trainee_Id,
         Trade,
         Module_Name,
         Formative_Assessment,
         Summative_Assessment,
         Total_Marks})

         return res.status(200).json({succcess:true ,updates:updates})
    } catch (err) {
          console.log(err);
    
     return res.status(500).json(err)
    }
})

//delete some marks

router.delete('/deleteMarks/:_id', async(req,res)=>{
   try {
     const {_id} =req.params
     const deleteMark= await marks.findByIdAndDelete(_id)
     return res.status(200).json({succcess:true ,deleteMark:deleteMark})
   } catch (err) {
      console.log(err);
    
     return res.status(500).json(err)
   }
})


module.exports=router
