import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import ProductsPage from './ProductsPage'
import HomePage from './HomePage'
import CartPage from './CartPage'
import ProfilePage from './ProfilePage'
import CodeChPage from './CodeChPage'
import PrivateRoutes from './PrivateRoutes'
function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path= '/home' element={<PrivateRoutes><HomePage/></PrivateRoutes>} />
            <Route path='/products' element={<PrivateRoutes><ProductsPage/></PrivateRoutes>} />
            <Route path='/cart' element={<PrivateRoutes><CartPage/></PrivateRoutes>} />
            <Route path='/profile' element={<PrivateRoutes><ProfilePage/></PrivateRoutes>} />
            <Route path='/codeChallenge' element={<PrivateRoutes><CodeChPage/></PrivateRoutes>} />
        </Routes>
    </div>
  )
}

export default AllRoutes