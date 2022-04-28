import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { deleteUser, loadUsers } from '../Redux/actions';
import '../App.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const dispatch=useDispatch();
    const history=useNavigate()
    const {users}=useSelector((state)=>state.users)
    const HandleDelete=(id)=>
    {
         if(window.confirm("are you want to delete this user?")){
             dispatch(deleteUser(id))
         }

    }
    
    useEffect(()=>
    {
        dispatch(loadUsers())
    },[])

    const addUser=()=>
    {
      history("/addUser")
    }
  
    return (

     <>
     <button className='btn btn-danger' onClick={addUser} style={{"marginLeft":1250 ,"marginTop":10}}>Add user</button>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
        <th scope="col">Contact</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
        {
           users.map((user)=>
            (
                <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.contact}</td>
                <td>
                <button type="button" class="btn btn-primary" onClick={()=>history(`/editUser/${user.id}`)} >Edit</button>
                <button type="button" onClick={()=>HandleDelete(user.id)} class="btn btn-success "  id="delete">Delete</button>
                <button type="button" class="btn btn-primary" onClick={()=>history(`/viewUser/${user.id}`)} style={{marginLeft:10}} >View</button>
                </td>
              </tr>
            ))
        }
      
      
    </tbody>
  </table>
  </>
  )
}

export default Home
