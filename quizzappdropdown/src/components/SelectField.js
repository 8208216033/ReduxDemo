import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {handleCategory,handleDifficulty,handleType,handleAmount,handleScore} from '../redux/actions'
const SelectField = (props) => {
    const {label,options} =props;
    console.log("options",options)
    const [value,setValue]=useState('')
    const dispatch=useDispatch()
    const handleChange=(e)=>
    {
     setValue(e.target.value)
     switch(label){
      case "Category":
        dispatch(handleCategory(e.target.value));
        break;
        case "Difficulty":
        dispatch(handleDifficulty(e.target.value));
        break;
        case "Type":
        dispatch(handleType(e.target.value));
        break;
        default:
          return;
        
     }
    }
  return (
    <Box mt={3} width="100%" >
        <FormControl size="small" fullWidth>
            <InputLabel>{label}</InputLabel>
             <Select value={value} label={label} onChange={handleChange}>
                 {/* <MenuItem>Option1</MenuItem>
                 <MenuItem>Option2</MenuItem>
                 <MenuItem>Option3</MenuItem> */}
                 {options.map(({id,name})=>
                 (
                     <MenuItem value={id} key={id}>{name}</MenuItem>
                 ))}
             </Select>
        
        </FormControl>

    </Box>
  )
}

export default SelectField