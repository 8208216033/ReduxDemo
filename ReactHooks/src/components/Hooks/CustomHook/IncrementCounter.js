import React,{useState} from 'react'
import useCustomhook from './useCustomhook'

const IncrementCounter = () => {
    
    const [state,setState]=useState(0)
    useCustomhook(state)
  return (
  <>
  <h1>{state}</h1>
  <button onClick={()=>setState(state+1)}>Increment</button>
  </>
  )
}

export default IncrementCounter