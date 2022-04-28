import { Button, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAmount, handleScore } from '../redux/actions'
const Finalscreen = () => {
  const {score}=useSelector(state=>state);
  // console.log("@@@@@",state)
  const history=useNavigate()
  const dispatch=useDispatch()
  const handleBackToSetting=()=>
  {
    dispatch(handleScore(0))
    dispatch(handleAmount(50))
      history('/')
  }
  return (
   <Box mt={30}>
     <Typography variant='h3' fontWeight="bold" mb={3}>Final Score{score}</Typography>
      <Button variant="outlined" onClick={handleBackToSetting}>back to settings</Button>
   </Box>
  )
}

export default Finalscreen