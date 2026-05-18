import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Select from './selectTrainee'
import { useNavigate, useParams } from 'react-router-dom'


export default function UpdateTrainee() {
    const[Trainee_Id, setTrainee_Id]=useState(0)
    const[FirstNames, setFirstNames]=useState("")
    const[LastName, setLastName]=useState("")
    const[Gender, setGender]=useState("")
    const[Trade_Id, setTrade_Id]=useState(0)
    const [trades, setTrades] = useState([])

    const navigate = useNavigate()

    const { _id } = useParams();

    async function trainee() {
    try {
     const res=await axios.put(`http://localhost:5000/Api/updateTrainee/${_id}`,{Trainee_Id,FirstNames,LastName,Gender,Trade_Id});
     res.data.message
      setTrainee_Id("")
        setFirstNames("")
        setLastName("")
        setGender("")
        setTrade_Id("")

        navigate('/')
    } catch (err) {
        console.log(err);
        alert(  alert(
      err.response?.data?.message ||
      "Server error occurred"
   ) )
        
    }
}

//select trade

const fetchTrade= async ()=>{
 
  try {
    const res =await axios.get('http://localhost:5000/Api/selectTrade');
    setTrades(res.data.select)
  } catch (err) {
    alert(err.response?.data?.message || "server failed wait moment")
  }

}

// const handleGetExstingTrainee = async () => {
//     try {
//         const res = await axios.get(`http://localhost:5000/Api/updateTrainee/${_id}`)
//     }
// }
useEffect(()=>{
  fetchTrade()
})


return(
    <div className='bg-gray-300 flex flex-col justify-center items-center min-h-screen'>
        <div className='bg-gray-100 p-4 w-[500px] max-x-xl rounded-lg shadow-2xl mt-10 '>
            <h1 className='text-center text-green-500 mt-3 mb-3 font-bold '>Update TRAINEE</h1>

            
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
                
            
                <select  value={Trade_Id} 
                  onChange={(e)=>{setTrade_Id(e.target.value)}}
                className='w-full border focus:outline-none focus:ring-2 focus:ring-green-500 tex-green-500 font-bold 
                p-3 mb-3 rounded-lg mt-3
                 focus:text-green-500'>

                  <option value="" > select trade</option>
                  {trades.map((tr)=>(
                    
                    <option key={tr._id} value={tr._id}>{tr.trade_name}</option>
                    
                  ))}

                </select>

                <button onClick={trainee} className='bg-green-500 hover:bg-green-700 transition duration-600 mb-3 text-white font-bold p-3 mt-3 rounded-lg mt-3 w-full'> UPATE TRAINEE </button>
            
        </div>
       
    </div>
)

}