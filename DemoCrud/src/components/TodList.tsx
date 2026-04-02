

import React from 'react'
import { useTodoStore, type ITodo } from '../store/useTodoStore'

function TodList() {

  const todoList = useTodoStore((state) => state.todos);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoList.map((todo: ITodo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✔" : ""}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodList