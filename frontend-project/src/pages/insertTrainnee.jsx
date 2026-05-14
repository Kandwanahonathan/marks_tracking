import axios from 'axios'
import React,{useState} from 'react'


export default function TraineInsert() {
    const[Trainee_Id, setTrainee_Id]=useState(0)
    const[FirstNames, setFirstNames]=useState("")
    const[LastName, setLastName]=useState("")
    const[Gender, setGender]=useState("")
    const[Trade_Id, setTrade_Id]=useState(0)
    async function trainee() {
    try {
        const{Trainee_Id,FirstNames,LastName,Gender,Trade_Id}=req.body
     if (!Trainee_Id || !FirstNames || !LastName || !Gender || !Trade_Id) {
         return res.status(403).json({message:"fill out missing"})
     }
     const res=await axios.post('http://localhost:5000/Api/InsertTrainees',{Trainee_Id,FirstNames,LastName,Gender,Trade_Id});
     res.data.message

    } catch (err) {
        console.log(err);
        alert(res.data.Error)
        
    }
}

return(
    <div className='bg-green-400 justify-center items-center min-h-screen'>
        <div className='bg-gray-500 rounded-lg shadow-lg'>
            <h1>REGISTER TRAINEE</h1>

            
                <input type="text" value={Trainee_Id} placeholder='Enter the trainee Id'
                  onChange={(e)=>{setFirstNames(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold'/>
            
                <input type="text" value={FirstNames} placeholder='Enter the FirstNames '
                  onChange={(e)=>{setTrainee_Id(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold'/>
            
                <input type="text" value={LastName} placeholder='Enter the LastName '
                  onChange={(e)=>{setLastName(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold'/>
            
                <input type="text" value={Gender} placeholder='Enter the Gender '
                  onChange={(e)=>{setGender(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold'/>
            
                <input type="text" value={Trade_Id} placeholder='Enter the Trade_Id '
                  onChange={(e)=>{setTrade_Id(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold'/>

                <button className='bg-green-500 hover:bg-green-700 transition duration-600 text-white font-bold'>ADD TRAINEE</button>
            
        </div>
    </div>
)

}