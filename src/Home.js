import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    let navigate=useNavigate()

    const handelr=()=>{
        if(email !=='' && password !==''){
            navigate('/Emplisiting')
        }
        
    }

  return (
    <div className='yazan'>
        <input required type='text' placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <span className='emptyName' style={email===''?{display:'block'}:{display:'none'}}>Please enter your name</span>
        <input type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handelr}>Submit</button>
    </div>
  )
}

export default Home