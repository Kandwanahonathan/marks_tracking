import axios from "axios";
import React,{useState,useEffect} from "react";

export default function Select() {

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
            
             <table border={2} className="border-collapse w-[90%] bg-green-200 shadow-2xl ">

            <thead className="">
                <tr>
                      <th className="p-3 bg-green-600 text-white">Trainee_Id</th>
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
                        <td>{sel.Trainee_Id}</td>
                        <td>{sel.FirstNames}</td>
                        <td>{sel.LastName}</td>
                        <td>{sel.Gender}</td>
                        <td>{sel.Trade_Id?.trade_name}</td>
                      
                    </tr>
                  ))}

            </tbody>

             </table>
           
        </div>
    )
}