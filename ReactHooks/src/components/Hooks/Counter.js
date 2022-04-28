import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState("I Am Counter");
    //toggle
    const[name,setName]=useState("i am punam ");
    var val=name;
    // const changeName=()=>
    // {
    //     if(val==='i am punam'){
    //         setName('here is punam Sontakke')

    //     }else{
    //         setName('i am punam')
    //     }
    // }
    //or
    const changeName=()=>{
        (val==='i am punam ')?setName("hii"):setName('u are not an user')
    }
   
  return (
    <>
    {/* <div>{count}</div>
    <button onClick={()=>setCount("I am incrementor")}>Increment</button> */}
    
    <h1>{name}</h1>
    <button onClick={changeName}>Toggle</button>
    </>
  )
}

export default Counter