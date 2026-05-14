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
      
     if (!Trainee_Id || !FirstNames || !LastName || !Gender || !Trade_Id) {
       return alert("Fill out all fields")
     }
     const res=await axios.post('http://localhost:5000/Api/InsertTrainees',{Trainee_Id,FirstNames,LastName,Gender,Trade_Id});
     res.data.message
      setTrainee_Id("")
        setFirstNames("")
        setLastName("")
        setGender("")
        setTrade_Id("")

    } catch (err) {
        console.log(err);
        alert(  alert(
      err.response?.data?.message ||
      "Server error occurred"
   ) )
        
    }
}

return(
    <div className='bg-gray-40  flex justify-center items-center min-h-screen'>
        <div className='bg-gray-100 p-4 w-[600px] rounded-lg shadow-2xl'>
            <h1 className='text-center text-green-500 mt-3 mb-3 font-bold '>REGISTER TRAINEE</h1>

            
                <input type="text" value={Trainee_Id} placeholder='Enter the trainee Id'
                  onChange={(e)=>{setTrainee_Id(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold 
                p-3 mb-3 rounded-lg mt-3
                 focus:text-green-500'/>
            
                <input type="text" value={FirstNames} placeholder='Enter the FirstNames '
                  onChange={(e)=>{setFirstNames(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold 
                p-3 mb-3 rounded-lg mt-3
                 focus:text-green-500'/>
            
                <input type="text" value={LastName} placeholder='Enter the LastName '
                  onChange={(e)=>{setLastName(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold 
                p-3 mb-3 rounded-lg mt-3
                 focus:text-green-500'/>
            
                <input type="text" value={Gender} placeholder='Enter the Gender '
                  onChange={(e)=>{setGender(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold 
                p-3 mb-3 rounded-lg mt-3
                 focus:text-green-500'/>
            
                <input type="text" value={Trade_Id} placeholder='Enter the Trade_Id '
                  onChange={(e)=>{setTrade_Id(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold 
                p-3 mb-3 rounded-lg mt-3
                 focus:text-green-500'/>

                <button onClick={trainee} className='bg-green-500 hover:bg-green-700 transition duration-600 mb-3 text-white font-bold p-3 mt-3 rounded-lg mt-3 w-full'>ADD TRAINEE</button>
            
        </div>
    </div>
)

}