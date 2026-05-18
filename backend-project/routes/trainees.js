const express=require('express')
const router=express.Router()
const trainees=require('../schema/trainees');
const tradeSchema=require('../schema/trade')

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
          res.status(500).json({
            success: false,
            message: "Failed to save trainee in database"
        })
    
   }
})


//select part in route of the trainee


router.get('/selectTrainee',async (req,res)=>{
 
    try {
        const select=await trainees.find().populate('Trade_Id')
    
        return res.status(200).json({message:"data retrieved successfully",select:select})
    } catch (err) {
        console.log(err)
         res.status(500).json({
            success: false,
            message: "Failed to save trainee in database"
        })
    }

})

// update the trainee

router.put('/updateTrainee/:_id',async (req,res)=>{
   try {
    const {_id}=req.params
    const{Trainee_Id,FirstNames,LastName,Gender,Trade_Id}=req.body

    let updated = {};
    if (Trade_Id) updated.Trade_Id = Trade_Id;
    if (FirstNames) updated.FirstNames = FirstNames;
    if (LastName) updated.LastName = LastName;
    if (Gender) updated.Gender = Gender;
    if (Trainee_Id) updated.Trainee_Id = Trainee_Id;
     const update=await trainees.findByIdAndUpdate(_id, updated,{returnDocument:'after'},)
     return res.status(200).json({message:"updated successfully",update:update})
     
    
   } catch (err) {
     console.log(err)
         res.status(500).json({
            success: false,
            message: "Failed to save trainee in database"
        })
   }
})

//delete trainee

router.delete('/deleteTrainee/:_id',async(req,res)=>{
    try {
        const{_id}=req.params
        const deleted=await trainees.findByIdAndDelete({_id})

        return res.status(200).json({message:"trainee deleted successfull", del:deleted})


    } catch (err) {
         res.status(500).json({
            success: false,
            message: "Failed to save trainee in database"
        })
    }
})

module.exports=router