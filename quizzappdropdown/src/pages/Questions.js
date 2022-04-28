import { Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import useAxios from '../hooks/useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleScore } from '../redux/actions'

import { decode } from 'html-entities'
const geRrandomInt=(max)=>
{
  return Math.floor(Math.random()*Math.floor(max));
}
const Questions = () => {
  const { question_category,question_difficulty,question_type,amount_of_question,score}=useSelector(state=>state)
  let apiUrl=`/api.php?amount=${amount_of_question}`
  const [questionIndex,setQuestionIndex]=useState(0);
  const [options,setOptions]=useState([])
  const[correctAnswer,setCorrectAnswer]=useState("")
  const history=useNavigate();
  // console.log("questions",amount_of_question,score)
//  console.log("========",question_category,question_difficulty)
const dispatch=useDispatch() 
console.log("======",questionIndex)
 if(question_category){
   apiUrl=apiUrl.concat(`&category=${question_category}`)
 }

 if(question_type){
  apiUrl=apiUrl.concat(`&type=${question_type}`)
}

if(question_difficulty){
  apiUrl=apiUrl.concat(`&difficulty=${question_difficulty}`)
}
 const {response,loading}=useAxios({url:apiUrl})
   console.log(response)
  //  console.log(response.results.correct_answer)
   useEffect(()=>
   {
     if(response?.results.length){
       const question=response.results[questionIndex];
       let answers=[...question.incorrect_answers]
       //console.log(question)
       answers.splice(geRrandomInt(question.incorrect_answers.length),0,question.correct_answer)
      //console.log(geRrandomInt(3))
      setOptions(answers) 
      console.log("correct",question.correct_answer)
    }
     
   },[response,questionIndex])
   if(loading){
     return(
       <Box mt={20}>
         <CircularProgress/>
       </Box>
     )
   }
const handleClickAnswer=(e)=>
{
  const question=response.results[questionIndex];
  if(e.target.textContent===question.correct_answer){
    dispatch(handleScore(score+1))
  }
  if(questionIndex+1<response.results.length){
    setQuestionIndex(questionIndex+1)
  }else
  {
    history('/score')
  }
}

const check=()=>
{
  const question=response.results[questionIndex];
  // {
  //   <p> {question.correct_answer}</p>
  console.log("000",question.correct_answer)
  setCorrectAnswer(question.correct_answer)
  alert(correctAnswer)

  // }
}
  return (
    <Box>
        <Typography variant='h4'>Question {questionIndex+1}</Typography>
         <Typography variant='h4' mt={5}>{decode (response.results[questionIndex].question)}</Typography>
  {
    options.map((data,id)=>
    (
      <Box mt={2} key={id}>
        <Button variant='contained' onClick={handleClickAnswer}>{decode (data)}</Button>
        </Box>
    ))
  }
   <Box mt={2}>
       Score:{score}/{response.results.length}
   </Box>
   {
   <Button variant='contained' onClick={check}>check answer</Button>
  }
    </Box>
    
    
  )
}

export default Questions