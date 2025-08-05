import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

export default function Authentication() {

    
   let isAuth =useAuth()
  return (
    isAuth ?   <Outlet></Outlet> : <Navigate to="/login"></Navigate>
   )
}
