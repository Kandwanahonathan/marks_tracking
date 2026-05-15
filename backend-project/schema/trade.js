const mongoose=require('mongoose')

const tradeSchema=mongoose.Schema({
    trade_id:{type:Number, require:true ,unique:true },
    trade_name:{type:String,require:true}
})

const trade=mongoose.model('trades',tradeSchema)

module.exports=trade