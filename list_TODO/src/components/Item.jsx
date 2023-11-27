import React from 'react';

function Item({ todo, deleteTodo }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={handleDelete}>BORRAR</button>
    </div>
  );
}

export default Item;
