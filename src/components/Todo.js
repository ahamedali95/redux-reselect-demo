import React from 'react';
import PropTypes from 'prop-types';
import TodoProptype from '../Proptypes/TodoProptype';

const Todo = ({ todo, markTodoComplete }) => {
  const handleClick = () => {
    markTodoComplete(todo);
  };

  return (
    <>
      <li style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.title}
        {
          !todo.completed &&
            <button
              style={{display: "inline", marginLeft: "10px" }}
              type="button"
              onClick={handleClick}
            >
              X
            </button>
        }
      </li>
    </>
  );
};

Todo.proptypes = {
  todo: PropTypes.arrayOf(TodoProptype),
  markTodoComplete: PropTypes.func.isRequired
};

export default Todo;