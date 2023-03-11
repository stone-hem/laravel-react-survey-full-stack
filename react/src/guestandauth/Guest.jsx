import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

function Guest() {
  const {userToken}=useStateContext()
  if (userToken) {
    return <Navigate to='/home'/>
  }
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <Outlet/>
    </div>
  )
}

export default Guest