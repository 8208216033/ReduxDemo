import React, { useState } from 'react'

const DealWithObjectArray = () => {
    const [data,setData]=useState({
        name:'abc',year:'26',city:'mumbai'
    })

    const changeData=()=>
    {
        setData({...data,name:"xyz"})
    }
  return (
   <>
   <h1>{data.name},{data.year},{data.city}</h1>
   <button onClick={changeData}>changeData</button>
   
   </>
  )
}

export default DealWithObjectArray