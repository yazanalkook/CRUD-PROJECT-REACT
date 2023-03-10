import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Add() {
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [body,setBody]=useState('')

    const navigate=useNavigate()

    const handelClick=(e)=>{
        e.preventDefault()
        // console.log({id,name,email,body})
        axios.post('http://localhost:8000/post',{name:name,email:email,body:body}).then((res)=>{
            alert('Saved success')
            navigate('/Emplisiting')
        }).catch((err)=>{console.log(err.message)})
    }

  return (
    <div className='container'>
        <form className='card' onSubmit={handelClick} >
            <div className='card-title'>
                Add Data
            </div>
            <div className='card-body' style={{'textAlign':'left'}}>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <label >Id</label>
                            <input value={id} disabled='disabled' type='text' className='form-control'/> 
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <label >Name</label>
                            <input required value={name} onChange={(e)=>{setName(e.target.value)}} type='text' className='form-control'/> 
                            { name.length === 0 &&<span className='text-danger'>Enter the name</span>}
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <label >Email</label>
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='text' className='form-control'/> 
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <label >Body</label>
                            <input value={body} onChange={(e)=>{setBody(e.target.value)}} type='text' className='form-control'/> 
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <button className='btn btn-primary'>Save</button>
                            <Link to='/Emplisiting' className='btn btn-danger'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    </div>
  )
}

export default Add