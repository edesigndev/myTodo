import React from 'react';
import { FaRegCheckCircle, FaRegTrashAlt } from 'react-icons/fa';
import '../css/TodoItem.css';
function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <FaRegCheckCircle
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <FaRegTrashAlt
        className='Icon Icon-delete'
        onClick={props.onDeleteTodo}
      />
    </li>
  );
}

export { TodoItem };
