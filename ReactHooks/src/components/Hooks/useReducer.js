import React,{useReducer} from 'react'
const intialstate=0;
const reducer=(state,action)=>
{
    if(action.type==='INCREMENT'){
        return state+1;
    }

    if(action.type==='DECREMENT'){
        return state-1;
    }
    return state;
}
const UseReducer = () => {
   const [state,dispatch]= useReducer(reducer,intialstate)
  return (
 <>
 <p>{state}</p>
 <div>
     <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
     <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
 </div>
 
 </>
  )
}

export default UseReducer

//same as useState but used in larger function
//its pur function