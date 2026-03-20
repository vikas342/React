import React, { use, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function MainLayout() {
    const nav = useNavigate()
    function logout() {
        localStorage.removeItem("user");
        nav('/login')
    }
     
  return (
    <>
    <div>MainLayout</div>
    <button className='btn btn-danger' onClick={() => logout()}>Logout</button>

    <button className='btn btn-danger' onClick= {() => nav('/custom-hook') }>Custom Hook</button>
    <button className='btn btn-danger' onClick= {() => nav('/api-call') }>Api Call</button>
    <button className='btn btn-danger' onClick= {() => nav('/react-hook-form') }>React Hook Form</button>

    
    <Outlet></Outlet>
    </>
  )
}
