import React, { useState,useEffect } from 'react'

const CleanupfuninuseEffect = () => {
    const [width,setWidth]=useState(window.screen.width)
    
    const actualwidth=()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>
    {
window.addEventListener("resize",actualwidth)
return()=>
{
   
   //for remove function from the memory
    window.removeEventListener("resize",actualwidth)
}
    })
  return (
    <>
    <p>{width}</p>
    </>
  )
}

export default CleanupfuninuseEffect