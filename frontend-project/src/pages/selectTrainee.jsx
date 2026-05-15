import axios from "axios";
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


export default function Select() {
const navigate = useNavigate();

    const [select,setSelect]=useState([""]);

    const handleSelect= async ()=>{
        try {
            const res= await axios.get('http://localhost:5000/Api/selectTrainee');
            
            setSelect(res.data.select)
        } catch (err) {
            console.log(err)
            alert(err.response?.data?.message || "server error occured")
        }
        
    }
    useEffect(()=>{
        handleSelect()
    },[])
     
    return(

        <div>
             <div  className="mt-4 mx-3 flex justify-right items-right">
                <button onClick={() => navigate('/insert')} className="bg-blue-700 text-white px-3 py-1 rounded mb-3 mt-3 text-3xl font-bold">Add</button>
             </div>
             <table border={2} className="border-collapse w-[90%] mt-8 bg-green-300 shadow-2xl mx-3 ">

            <thead className="">
                <tr>
                      <th className="p-3 bg-green-600 text-white ">Trainee_Id</th>
                      <th className="p-3 bg-green-600 text-white">FirstNames</th>
                      <th className="p-3 bg-green-600 text-white">LastName</th>
                      <th className="p-3 bg-green-600 text-white">Gender</th>
                      <th className="p-3 bg-green-600 text-white">Trade_Id</th>   
                      <th colSpan={2} className="p-3 bg-green-600 text-white">Action</th>   
                </tr>

            </thead>

            <tbody>

                  {select.map((sel,index)=>(
                    <tr key={index}>
                        <td className="text-gray-700 font-bold mb-3 p-3">{sel.Trainee_Id}</td>
                        <td className="text-gray-700 font-bold mb-3 p-3" >{sel.FirstNames}</td>
                        <td className="text-gray-700 font-bold mb-3 p-3">{sel.LastName}</td>
                        <td className="text-gray-700 font-bold mb-3 p-3">{sel.Gender}</td>
                        <td className="text-gray-700 font-bold mb-3 p-3">{sel.Trade_Id?.trade_name}</td>
                         <td>
   <button className="bg-blue-500 text-white px-3 py-1 rounded mb-3 mt-3">
      Update
   </button>
</td>

<td>
   <button className="bg-red-500 text-white px-3 py-1 rounded mb-3 mt-3">
      Delete
   </button>
</td>
        
                    </tr>
                  ))}

            </tbody>

             </table>
           
        </div>
    )
}