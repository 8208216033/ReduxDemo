import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice';
import './Logout.css'

const Logout = () => {
    const dispatch=useDispatch();
    const user=useSelector(selectUser)
    const handleLogout=(e)=>
    {
     e.preventDefault();
     dispatch(logout())

    }
  return (
   <>
   <div className='logout'>
       <h1>
           Welcome <span id='user_name'>{user.name}</span>
           <br/>
           <button className='logout_btn' onClick={(e)=>handleLogout(e)}>Logout</button>
       </h1>
   </div>
   
   </>
  )
}

export default Logout