//useeffect call only if count value is change or update
import React, { useEffect, useState } from 'react'
const DependencyinEffecthook = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>
    {
        console.log("i am first")
        if(count>=1)
        {
            document.title=`Chats (${count})`
        }else{
            document.title=`Chats`
        }
    

    },[count])

    useEffect(()=>
    {
        console.log("i am second")
    },[])

    console.log("i am outside")
 
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Click</button>
    </>
  )

}

export default DependencyinEffecthook

// o/p:
// i am outside
// i am first
//  i am second
// means outside call first then first use effect then second
//second will be call only one time but first will call again and again after changing the count value