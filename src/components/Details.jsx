import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {  Link, useParams } from 'react-router-dom'

const Details = () => {
    const [user, setUesr] = useState(null)
    const {id}=useParams()
    console.log(user);
useEffect(() => {
  
try {
    const getUser=async()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/users");
        setUesr(res.data.find(el=>el.id==id))
    }
    getUser()
} catch (error) {
    console.log(error);
}

}, [id])


  return (
    <div>
        {
            user&&<div>
       <h1>{user.name}</h1>
       <h2>{user.email}</h2>
       

            </div>
        }
 <Link to={`/`} >  <Button className='btn' variant="primary">home</Button></Link>
    </div>
  )
}

export default Details
