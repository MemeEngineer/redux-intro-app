import {createSlice} from "@reduxjs/toolkit"
import { nanoid } from '@reduxjs/toolkit'
// console.log(nanoid())

export const todoSlice = createSlice({
    name:'todos',
    initialState:[
        {id:'1', text: 'Learn React', completed: true},
        {id:'2', text: 'Learn Redux', completed: false},
    ],
    reducers: {
        //add Todo
        addTodo: (state, action,e) => {
            let {payload} = action;
        
             const newTodo ={
                id: nanoid(),
                text: payload,
                completed: false
             }
             state.push(newTodo)
        },

        //delete Todo
        deleteTodo: (state, action) => {
            let{payload} = action;
            let indexOfDelete = state.findIndex((item) => item.id === payload)
            state.splice(indexOfDelete,1)
        }

    }

})
//Todo: we need to export our actions creators
export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;