import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>
    {
        // console.log("use Effect call")
        document.title=`Chats (${count})`

    })

   
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
    </>
  )
}

export default UseEffect1