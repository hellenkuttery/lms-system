import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRouter = () => {
    const navigate=useNavigate()
    const user=true;
  return user ? <Outlet/> : navigate("/")
}

export default PrivateRouter