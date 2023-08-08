import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice.js'
import todoReducer from "../Features/todos/todoSlice.js"

//The current Redux application state lives in an object called the store.
export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  },
})