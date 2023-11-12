import React from 'react';
import './addjob.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Addjob() {
 const [data,setData]=useState([]);
  const [dropval,setDrop] = useState([]);
  const {id} = useParams();
  const usenav=useNavigate();



  const handler=(e)=>
{
    const{name,value}=e.target;

    setData((prevState)=>
    ({...prevState,[name]:value}))
}

const postjob=()=>{

  const jobdetails={jobtitle:data.jobtitle,jobdescription:data.jobdescription,experience:data.experince,noofpositions:data.noofpositions,jobstatus:data.jobstatus,vendorid:data.type,clientid:id}
 axios.post('http://localhost:5000/jobpost',jobdetails).then((res)=>{
  setData(res.data);    
  console.log(res.data[0].details)
  })
  usenav(`/client/${id}`)
}
  
useEffect(()=>{
  console.log('this is useeffect')
  axios.get('http://localhost:5000/vendornames').then((res)=>{
    setDrop(res.data)
    console.log(res.data)
  })
},[])
  return (
    <div>
    <div id="addjobdiv">
      <label className='joblabel'>JOB TITLE :</label>
      <input className='joninput' type="text" name="jobtitle" value={data.jobtitle} onChange={handler} placeholder='JOB TITLE...' required /><br/><br/>
      <label className='joblabel'>JOB DESCRIPTION :</label>
      <input className='joninput' type="text" name="jobdescription" value={data.jobdescription} onChange={handler} placeholder='JOB DESCRIPTION...' required /><br/><br/>
      <label className='joblabel'>EXPERINCE :</label>
      <input className='joninput' type="text" name="experince" value={data.experience} onChange={handler} placeholder='EXPERIENCE...' required /><br/><br/>
      <label className='joblabel'>NO.OF.POSITIONS :</label>
      <input className='joninput' type="text" name="noofpositions" value={data.noofpositions} onChange={handler} placeholder='NO.OF.POSITIONS...' required /><br/><br/>
      <label className='joblabel'>JOB STATUS :</label>
      <input className='joninput' type='text' name="jobstatus" value={data.jobstatus} onChange={handler} placeholder='JOB STATUS...' required /><br/><br/>
      <label className='joblabel'>VENDOR NAME :</label>
      <select id="jobsele" onChange={handler} name='type'>
                  <option className='jobopt'> select vendors name</option>
                  {dropval.map((item)=> 
                  
                    <option className='jobopt' value={item.id}>{item.username}</option>
                  )}
</select><br/><br/>
      <button className="postjob" onClick={postjob}>Post Job</button>
    </div>
    <img src="https://cdn.pixabay.com/photo/2019/03/22/19/38/hiring-4074021_1280.png" alt="no img" id="postimg"/>
    </div>
  )
}