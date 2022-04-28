import React, { useContext } from 'react'
import { BioData } from './CompA'
const CompC = () => {
    const context=useContext(BioData)
  return (
   <>
   <h1>{context}</h1>
   </>
  )
}

export default CompC