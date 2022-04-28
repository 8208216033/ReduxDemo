import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const getPhotos=createAsyncThunk(
   'photos/getphotos',
   async ()=>
   {
       const res=await fetch("https://picsum.photos/v2/list?page=3&limit=9")
    const formattedResponse=await res.json();
    return formattedResponse;
   }
)
export const gallarySlice=createSlice({
  name:"gallery",
  initialState:{
      photos:[],
      isloading:false
  } ,
  extraReducers:{
      [getPhotos.pending]:(state)=>
      {
          state.isloading=true;
      },
      [getPhotos.fulfilled]:(state,action)=>
      {
          state.photos=action.payload;
          state.isloading=false
      },
      [getPhotos.rejected]:(state)=>
      {
          state.isloading=false
      }
  } 
})

export default gallarySlice.reducer;
//pwa,notification
//progressive web app
