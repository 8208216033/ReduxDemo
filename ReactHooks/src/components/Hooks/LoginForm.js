import React, { useState } from "react";

const LoginForm = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[allentry,setAllentry]=useState([]);
    const submit=(e)=>
    {
        e.preventDefault()
        const newentry= {email:email,password:password} 
    //     if(allentry.includes(newentry))
    //   {
    //       alert("user  already Found")
    //   }
    var i=0;
    for(i;i<allentry.length-1;i++)
    {
        if(allentry[i].email===newentry.email)
        (
            alert("user exist")
        )
    }
    
      setAllentry([...allentry,newentry])
      console.log(allentry)
      setEmail("");
      setPassword("")
      
    }

  return (
    <>
      <form action="" onSubmit={submit}>
          <label htmlFor="email" autoComplete="off">Email</label>
          <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br/>
          <label htmlFor="email" autoComplete="off">Password</label>
          <input type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Login</button>
      </form>

      {
          allentry.map((item,index)=>
          {
            //   destructuring
              const {email,password}=item
return(
    
    <>
    <p key={email}>{email}</p>
    <p>{password}</p>
    </>
)
          })
      }
    </>
  );
};

export default LoginForm;
