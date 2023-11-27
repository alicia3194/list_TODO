import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div className="form-container1">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Añadir tarea..."
        className="add-input"
      />
      <button onClick={handleAddTodo} className="button pink add-button">ADD</button>
    </div>
  );
};

export default TodoForm;

