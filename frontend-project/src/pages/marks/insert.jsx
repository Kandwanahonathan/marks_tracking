import { useState,useEffect } from "react";

import  axios    from 'axios'


export default function InsertMarks() {
    const[marks_id,setMarks_id]=useState("")
    const[Trainee_Id,setTrainee_Id]=useState("")
    const[Trade,setTrade]=useState("")
    const[Module_Name,setModule_Name]=useState("")
    const[Formative_Assessment,setFormative_Assessment]=useState("")
    const[Summative_Assessment,setSummative_Assessment]=useState("")
    const[Total_Marks,setTotal_Marks]=useState("")
    const [trainee, setTrainee]=useState([])
  async  function handleInsert(){
       try {
        const res= await  axios.post('http://localhost:5000/mark/marks',{marks_id, Trainee_Id, Trade, Module_Name,Formative_Assessment, Summative_Assessment,Total_Marks})
        alert(res.data.message);
        setMarks_id("");
        setTrainee_Id("");
        setTrade("");
        setModule_Name("");
        setFormative_Assessment("");
        setSummative_Assessment("");
        setTotal_Marks("");
       
       } catch (err) {
         alert(err)
       }

  }
     useEffect(()=>{
        const forma= Number(Formative_Assessment)
        const samm= Number(Summative_Assessment)
  
        if (!isNaN(forma) && !isNaN(samm)) {
            setTotal_Marks(forma + samm)
        }

     },[Formative_Assessment,Summative_Assessment])
  const SelectTrainee= async ()=>{
       try {
         const res=await axios.get('http://localhost:5000/Api/selectTrainee')
         setTrainee(res.data.select)
       } catch (err) {
        alert(err)
       }
  }
  useEffect(()=>{
    SelectTrainee()
  },[])
   
    return(
        <div className="bg-gray-300 min-h-screen flex justify-center  items-center">
            <div className="w-[900px] mt-4 bg-gray-200 rounded-lg shadow-2xl ">
                <h1 className="text-center font-bold text-green-900 text-2xl">ADD MARKS OF STUDENTS</h1>
                <div className="p-4">
                    
                    <input type="text" value={marks_id} 
                    onChange={(e)=>setMarks_id(e.target.value)}
                    className="w-full border rounded p-3 focus:ring-2 focus:outline-none focus:ring-green-500 mb-3  "
                    placeholder="enter marks_id"
                    />
                    <select value={Trainee_Id} onChange={(e)=>setTrainee_Id(e.target.value)} className="w-full border rounded p-3 focus:ring-2 focus:outline-none focus:ring-green-500 mb-3">
                        <option value=""disabled> select trainees</option>
                        {trainee.map((tr)=>(
                            <option key={tr._id} value={tr._id} >{tr.FirstNames}{tr.LastName}</option>
                        ))}
                    </select>
                    <input type="text" value={Trade} 
                    onChange={(e)=>setTrade(e.target.value)}
                    className="w-full border rounded p-3 focus:ring-2 focus:outline-none focus:ring-green-500 mb-3 "
                    placeholder="enter Trade"
                    />
                    <input type="text" value={Module_Name} 
                    onChange={(e)=>setModule_Name(e.target.value)}
                    className="w-full border rounded p-3 focus:ring-2 focus:outline-none focus:ring-green-500 mb-3 "
                    placeholder="enter Module_Name"
                    />
                    <input type="text" value={Formative_Assessment} 
                    onChange={(e)=>setFormative_Assessment(e.target.value)}
                    className="w-full border rounded p-3 focus:ring-2 focus:outline-none focus:ring-green-500 mb-3 "
                    placeholder="enter the Formative_Assessment marks "
                    />
                    <input type="text" value={Summative_Assessment} 
                    onChange={(e)=>setSummative_Assessment(e.target.value)}
                    className="w-full border rounded p-3 focus:ring-2 focus:outline-none focus:ring-green-500 mb-3 "
                    placeholder="enter the Summative_Assessment marks "
                    />
                    <input type="text" value={Total_Marks} 
                    readOnly
                    className="w-full border rounded p-3 focus:ring-2 focus:outline-none focus:ring-green-500 mb-3 "
                    placeholder=" The total marks " 
                    />
                    <button className="bg-green-900 active:bg-green-600 hover:bg-green-700  px-4 py-2 rounded mt-3  transition duration-400 text-white text-2xl w-full" onClick={handleInsert}>ADDMarks</button>
                </div>
            </div>
        </div>
    )

}