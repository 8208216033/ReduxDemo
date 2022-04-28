import React, { useState } from 'react'

const UseStateArray = () => {
    var biodata=[{
        id:0,myName:"abc",age:26
      },
      {
        id:1,myName:"xyz",age:27
      }
    ]
    const [array,setArray]=useState(biodata)
    console.log(array)
    const clearArray=()=>
    {
        setArray([]);
    }
    
    // console.log(biodata)
  return (
    <>
    {
        array.map((item)=>{
            return(
                
                <>
                <h3 key={item.id}>{item.id},{item.myName},{item.age}</h3>
                
               
                
                </>

            )

        }
         )
    }

    <button onClick={clearArray}>Clear</button>
    </>
  )
}

export default UseStateArray
