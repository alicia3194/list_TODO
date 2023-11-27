// components/TodoApp.jsx
import React, { useState } from 'react';
import FormTodo from "./components/FormTodo";
import List from "./components/List";
import './App.css'; 

function App() {
  const [todos, setTodos] = useState([]);
  const preloadData = () => {
    const data = [
      { id: 1, text: 'Estudiar React' },
      { id: 2, text: 'Estudiar Swagger' },
    ];
    setTodos(data);
  };

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    preloadData();
  };
  return (
    <div className="app-container">
      <h3>Haz tu lista de tareas</h3>
      <FormTodo addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
      <button onClick={resetTodos} className="button pink reset-button">RESET</button>
      <button onClick={() => setTodos([])} className="button blue clear-button">CLEAR</button>
    </div>
  );
}

export default App;
