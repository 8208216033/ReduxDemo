import {
  CHANGE_CATEGORT,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
} from "./actionTypes";


export const handleCategory=payload=>
({
    type:CHANGE_CATEGORT,
    payload,
})

export const handleDifficulty=payload=>
({
    type:CHANGE_DIFFICULTY,
    payload,
})


export const handleType=payload=>
({
    type:CHANGE_TYPE,
    payload,
})


export const handleAmount=payload=>
({
    type:CHANGE_AMOUNT,
    payload,
})


export const handleScore=payload=>
({
    type:CHANGE_SCORE,
    payload,
})



