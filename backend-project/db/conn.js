const mongoose=require('mongoose')

async function connect (){
    try {
        await mongoose.connect('mongodb://localhost:27017/gikonko_tss')
        console.log("db connectd successfully");
        
    } catch (err) {
        console.log(err     );
        
    }
}
connect()
module.exports=connect