import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectField from '../components/SelectField'
import TextFeildComp from '../components/TextFeildComp'
import useAxios from '../hooks/useAxios'


const Settings = () => {
    const history=useNavigate()
    const {response,error,loading}=useAxios({url:"/api_category.php"})
    // console.log(response)
    if(loading){
        return(
            <Box mt={20}>
                <CircularProgress/>
            </Box>

        )
    }
    if(error){
        return(
            <Typography variant="h6" mt={20} color="red">
                Some Went Wrong!
            </Typography>
        )
    }

    const difficultyOption=[
        {id:"easy", name:"easy"},
        {id:"medium", name:"medium"},
        {id:"hard", name:"hard"}
    ]

    const typeOptions=[
        {id:"multiple",name:"Multiple Choice"},
        {id:"boolean", name:"True/False"}
    ]
    const handleSubmit=e=>
    {
        e.preventDefault();
        history('/questions')
    }
  return (
   <>
   <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
   <form onSubmit={handleSubmit}>
       <SelectField  options={response.trivia_categories}label="Category"/>
       <SelectField  options={difficultyOption} label="Difficulty"/>
       <SelectField options={typeOptions}  label="Type"/>
       <TextFeildComp />
       <Box mt={3} width="100%">
           <Button fullWidth variant="contained" type="submit">
               Get Started
           </Button>
       </Box>
   </form>
   
   </>
  )
}

export default Settings