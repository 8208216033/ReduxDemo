import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {addUser,deleteUser,updateUsername} from './features/Users'
import {useState} from 'react'

function App() {
  const dispatch=useDispatch();
  const userlist=useSelector((state)=>state.users.value)
  const [name,setName]=useState("");
  const [username,setUsername]=useState("")
  const [newusername,setNewusername]=useState("")
  
  return (
    <div className="App">
     <div className='addUser'>
       <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
       <input type="text" placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/>
       <button onClick={()=>{dispatch(addUser({id:userlist[userlist.length-1].id+1,name:name,username:username}))}}>Add User</button>
     </div>
     <div className='displayUsers'>
       {
         userlist.map((user)=>
          {
           return <div>
             <h1>{user.name}</h1>
             <h1>{user.username}</h1>
             <input type="text" placeholder='Name' onChange={(e)=>{
               setNewusername(e.target.value)
               }}/>
               <button onClick={()=>{dispatch(updateUsername({id:user.id,username:newusername}))}}>Update username</button>
               <button onClick={()=>{dispatch(deleteUser({id:user.id}))}}>Delete user</button>
             </div>
          })
       }
     </div>
    </div>
  );
}

export default App;

//npm i react-redux @reduxjs/toolkit
