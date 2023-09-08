
import React, {useState} from 'react'



const Todo = ({ todo, onEdit, onDelete }) => {
    return (
      <li className='item'>
        <div className='item__text'>
        <p>{todo.text}</p>
        </div>
        <div className='item__btn'>
        <button onClick={() => onEdit(todo)}></button>
        <button onClick={() => onDelete(todo)}></button>
        </div>
      </li>
    );
  };

export default Todo