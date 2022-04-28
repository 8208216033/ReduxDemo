import React, { createContext } from 'react'
import CompB from './CompB';
const BioData=createContext();
const CompA = () => {
  return (

    <BioData.Provider value={"ABC"}>
<CompB/>
 
    </BioData.Provider>
  )   
}

export default CompA

export {BioData};