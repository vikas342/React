import React, { use, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

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


        <button className='btn btn-danger' onClick= {() => nav('/zustand') }>zustand</button>


<Link to="/custom-hook">Custom Hook</Link>
<Link to="/api-call">Api Call</Link>
<Link to="/react-hook-form">React Hook Form</Link>

    <Outlet></Outlet>
    </>
  )
}
