import React, { useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';

const NewTodo = ({ addTodo }) => {
  const id = useRef(12);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleAddTodoClick = () => {
    const todo = constructTodo();
    addTodo(todo);
    setInputValue('');
  };

  const constructTodo = () => {
    ++id.current;

    return {
      userId: 1,
      id: id.current,
      title: inputValue,
      completed: false
    };
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="button"
        onClick={handleAddTodoClick}
      >
        Add Todo
      </button>
    </>
  );
};

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default memo(NewTodo);