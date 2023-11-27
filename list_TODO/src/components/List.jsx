import React, { useState } from 'react';

const List = ({ todos, deleteTodo }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleCheckboxChange = (id) => {
    if (selectedTasks.includes(id)) {
      setSelectedTasks(selectedTasks.filter((taskId) => taskId !== id));
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  const handleDeleteSelected = () => {
    selectedTasks.forEach((taskId) => deleteTodo(taskId));
    setSelectedTasks([]);
  };

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            <input
              type="checkbox"
              checked={selectedTasks.includes(todo.id)}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            <span className="todo__text">{todo.text}</span>
          </li>
        ))}
      </ul>
      {selectedTasks.length > 0 && (
        <button className="button black clear-button" onClick={handleDeleteSelected}>Borrar</button>
      )}
    </div>
  );
};

export default List;

