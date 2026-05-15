const tradeSchema=require('../schema/trade')
const express=require('express')
const router=express.Router()
router.post('/InsertTrades',async (req,res)=>{
   try {
     const{trade_id,trade_name}=req.body
     if (!trade_id || !trade_name ) {
         return res.status(403).json({message:"fill out missing"})
     }
     const insert=await tradeSchema.create({
         trade_id,trade_name
     })
  return res.status(201).json({message:"tradeinserted successfully",insert:insert})
   } catch (err) {
    console.log(err);
          res.status(500).json({
            success: false,
            message: "Failed to save trade in database"     
        })
    
   }
})

module.exports=router