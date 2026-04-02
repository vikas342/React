

import React, { useState } from 'react'
import { useTodoStore } from '../store/useTodoStore';

function AddTodo() {
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
    const todoList = useTodoStore((state) => state.todos);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new todo..."
      />

      <button onClick={()=> {addTodo(input);  setInput("") }}>Add Todo</button>
    </div>
  )
}

export default AddTodo