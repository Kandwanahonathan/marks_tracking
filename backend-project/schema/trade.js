const mongoose=require('mongoose')

const trade=mongoose.Schema({
    trade_id:{type:Number, require:true ,unique:true },
    trade_name:{type:String,require:true}
})

const trade=mongoose.model('trades',trade)

module.exports=trade