import {createSlice,PayloadAction } from '@reduxjs/toolkit'
export interface userstate{
    value:number,
    
}
const initialState:userstate={
    value:0
}
 const userslice=createSlice({
    name:'user',
    initialState,
    reducers:{increament:(state)=>{
        state.value+=1
    },
    imcreamentbyamt:(state,Action:PayloadAction<number>)=>{
state.value=+Action.payload
    }
}
})
