const express=require('express')
const cors=require('cors')
const routerTrainee=require('./routes/trainees')
const router=require('./routes/marks')
const conn=require('./db/conn')
const  Routertrades=require('./routes/trades')
const app=express()

app.use(express.json())
app.use(cors(
    {origin:"http://localhost:5173"}
))

app.use('/Api',routerTrainee)
app.use('/Api',Routertrades)
app.use('/mark',router)
app.listen(5000, ()=>{
    console.log('server run on http://localhost:5000/mark');
    
})