//Conditional hooks
//you cannot use hooks in condition
//but you can use condition in hooks

import React, { useEffect, useState } from 'react'


const UseEffect2 = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>
    {
        if(count>=1)
        {
            document.title=`Chats (${count})`
        }else{
            document.title=`Chats`
        }
    

    })
 
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
    </>
  )

  
}

export default UseEffect2