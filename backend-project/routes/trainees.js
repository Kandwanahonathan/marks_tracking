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

router.put('/updateTrainee/_id',async (req,res)=>{
   try {
    const {_id}=req.params
    const{Trainee_Id,FirstNames,LastName,Gender,Trade_Id}=req.body
     if (!Trainee_Id || !FirstNames || !LastName || !Gender || !Trade_Id) {
         return res.status(403).json({message:"fill out missing"})
     }
     const update=await trainees.findByIdAndUpdate(_id,{
        Trainee_Id,
        FirstNames,
        LastName,
        Gender,
        Trade_Id,
        new:"true"
     })
     
    
   } catch (err) {
     console.log(err)
         res.status(500).json({
            success: false,
            message: "Failed to save trainee in database"
        })
   }
})


module.exports=router