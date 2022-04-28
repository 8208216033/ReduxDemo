//similar as function but name as hook beacuase of nameng convention use is must in naming convention

import React,{useEffect, useState} from 'react'

const useCustomhook = (state) => {
    //use only variable dont use curly brace like({state})
 useEffect(()=>
 {
    if(state===9){
      alert("value exceed")
    }
 })
}

export default useCustomhook