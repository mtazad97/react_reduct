import { createStore } from "redux";
import {createSlice,configureStore} from '@reduxjs/toolkit';
//user - username,password,roles,permissions,last login - dataslice 1
//votes - value, toggle- dataslice 2
//dataset- points, values - dataslice 3

const initialState = {votes:0,toggle:true}
// const reducerFunction=(state = initialState,action)=>{
//     if(action.type==="Increment"){
//         // state.votes++
//      return {votes:state.votes+1,toggle:state.toggle}
//     }
//     else if(action.type==="Decrement"){
//         return {votes:state.votes-1,toggle:state.toggle}
//     }
//     else if(action.type==="Increase"){
//         return {votes:state.votes+action.payload,toggle:state.toggle}
//     }
//     else if(action.type==="Toggle"){
//         return {votes:state.votes,toggle:!state.toggle}
//     }
// }
 const reducer={
    Increment(state)
    {state.votes++
    },
    Decrement(state)
    {state.votes--},
    Increase(state,action)
    {state.votes= state.votes+action.payload},
    Toggle(state)
    {state.toggle =!state.toggle}
}
const voteSlice = createSlice({name:"votes",initialState,reducers:reducer})
const voteStore=configureStore({reducer:voteSlice.reducer})
// const voteStore=createStore(voteSlice.reducer)
// const voteStore=createStore(reducerFunction);
export const actions = voteSlice.actions
export default voteStore