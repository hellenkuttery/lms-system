import React from 'react'
import Navbar from './../components/Navbar';
import useAuthCall from '../hooks/useAuthCall';
import { useEffect } from 'react';

const Dashboard = () => {

  const {register}=useAuthCall()
  useEffect(()=>{
    register()
  },[])

  return (
    <div className='bg-[#b29f91]'>
        <Navbar/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam veritatis consectetur, fugit nostrum dolore consequuntur quos magni, deserunt ad doloremque dolor debitis doloribus minus! Dolore, ullam. Ut, ipsam fugit!</p>
    </div>
  )
}

export default Dashboard