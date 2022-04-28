import React, { useState } from 'react'
//&& or || operator use.
const ShortCircuitEvaluation = () => {
    const [data,setData]=useState("")
    const [dataa,setDataa]=useState("I am Punam")
  return (
   <>
   {/* //shortcircuit opertaor */}
   {/* //either data or another text only in one h1 tag you can implement anyrthing */}
   <h1>{data||
   <>
   <h1>Hello</h1>
   </>
   }</h1>

   <h2>
       {
          dataa||<h2>Hii user</h2>
       }
   </h2>

   {/* && operator if first condition false then no o/p here data is null meanse false no o/p */}
   <h1>
       {
           data&&"hello"
       }
   </h1>
   
  {/* here dataa is naot null so its true it gives o/p hiii*/}
   
   <h1>
       {
           dataa&&
           <h1>Hiii</h1>
       }
   </h1>
   
   </>


  )
}

export default ShortCircuitEvaluation