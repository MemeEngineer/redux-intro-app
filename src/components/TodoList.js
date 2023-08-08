//read data from state

//creat a input to add new todo

//button to delete a todo

//import the action creators functions
import { addTodo, deleteTodo } from "../Features/todos/todoSlice.js";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

export default function TodoList() {
  //read data from redux store
  const todoList = useSelector((state) => state.todos);

  //function to send an action to the reducer
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && dispatch(addTodo(text, e))
        }
      />
      {todoList.map((list) => {
        return (
          <div key={list.id}>
            <li>{list.text}</li>
            <button onClick={()=> dispatch(deleteTodo(list.id))}> Delete</button>
          </div>
        );
      })}
    </div>
  );
}
