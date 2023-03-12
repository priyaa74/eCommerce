import React from 'react'
import Navbar from '../components/Navbar'
import ModalContainer from '../components/ModalContainer'

function ProfilePage() {
  return (
    <div>
        <Navbar/>
        <div >
            <img style={{margin:'auto 40%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIQVYPsPneu1Z2jjiXe9VmC1jWD8smQ8-TQ&usqp=CAU" alt="userImg" />
            <p style={{textAlign:'center'}}>mor_2314</p>
            <p style={{textAlign:'center'}}>mor_2314@gmail.com</p>
        </div>
        <ModalContainer/>
    </div>
  )
}

export default ProfilePage