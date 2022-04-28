import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate ,useParams} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addUser, getSingleUser, updateUser } from "../Redux/actions";
const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    contact: "",
  });
  let {id}=useParams();
  console.log(id)
  const [err,setErr]=useState('')
 const dispatch=useDispatch()
  const history=useNavigate();
  const { name, email, password, address, contact } = state;
   const {user}=useSelector((state)=>state.users)
 useEffect(()=>
 {
   dispatch(getSingleUser(id))
 },[])
 useEffect(()=>
 {
     if(user){
         setState({...user})
     }
 },[user])
  const onHandleInput=(e)=>
 {
     let {name,value}=e.target;
     setState({...state,[name]:value})
 }
 const handleSubmit=(e)=>
 {
     e.preventDefault()
     if(!name|| !address|| !email|| !contact)
     {
         setErr("plese enter value")
     }
     else{
        dispatch(updateUser(state,id))
        history("/")
        setErr("")
     }
 }
 
  return (
    <>
      <div className="container" >
          <button className="btn btn-primary" onClick={()=>history("/")}>GO BACK</button>
          {err?<h4>{err}</h4>:""}
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-3" style={{ marginTop: 40 }}>
            <label htmlFor="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              value={name ||""}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onHandleInput}
            />
          </div>

          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              value={email ||""}
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onHandleInput}
            />
          </div>
          {/* <div class="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              value={password}
              name="password"
              id="exampleInputPassword1"
              onChange={onHandleInput}
            />
          </div> */}
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              value={address ||""}
              name="address"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onHandleInput}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">
             Contact
            </label>
            <input
              type="number"
              class="form-control"
              value={contact ||""}
              name="contact"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onHandleInput}

            />
          </div>
          <button type="submit"  class="btn btn-primary">
           update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
