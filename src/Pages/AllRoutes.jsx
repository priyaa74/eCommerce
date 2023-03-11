import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Navbar from '../components/Navbar'

function AllRoutes() {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes