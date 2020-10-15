import React, { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList'/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };
  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todos</h1>

      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
