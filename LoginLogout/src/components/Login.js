import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "./login.css";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch()
  const handleSubmit=(e)=>
  {
      e.preventDefault();
      dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn:true
      }))

  }
  return (
    <div className="login">
      <form id="login_form" onSubmit={(e)=>handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br/>
        <input
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br/>

        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br/>
        <button type="submit" className="submit_btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
