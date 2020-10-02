import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import TodoProptype from '../Proptypes/TodoProptype';

const TodoList = ({ todos, markTodoComplete, backgroundColor }) => {
  return (
    <ul style={{ backgroundColor }}>
      {
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              markTodoComplete={markTodoComplete}
            />
          );
        })
      }
    </ul>
  );
};

TodoList.propTypes = {
  backgroundColor: PropTypes.string,
  todos: PropTypes.arrayOf(TodoProptype.PROPTYPES),
  markTodoComplete: PropTypes.func.isRequired
};

export default TodoList;