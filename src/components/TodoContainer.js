import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import todos from '../todos';
import {loadTodos, addTodo, completeTodo, setFilter, setTheme} from '../reducers/todoReducer';
import TodoList from './TodoList';
import NewTodo from './NewTodo';
import TodoFilter from './TodoFilter';
import {filters} from '../constants';
import ThemeSwitcher from './ThemeSwitcher';
import TodoProptype from "../Proptypes/TodoProptype";

const TodoContainer = props => {
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = () => {
    props.loadTodos(todos);
  };

  const addTodo = useCallback(todo => {
    props.addTodo(todo);
  }, []);

  const markTodoComplete = todo => {
    props.completeTodo(todo.id);
  };

  const applyFilter = useCallback(filter => {
    props.setFilter(filter);
  }, []);

  const switchTheme = useCallback(color => {
    props.setTheme(color)
  }, []);

  return (
    <>
      <NewTodo addTodo={addTodo} />
      <TodoList
        todos={props.todos}
        markTodoComplete={markTodoComplete}
        backgroundColor={props.backgroundColor}
      />
      <TodoFilter applyFilter={applyFilter} />
      <ThemeSwitcher switchTheme={switchTheme} />
    </>
  );
};

const applyFilter = (todos, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return todos;
    case filters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case filters.SHOW_COMPLETED: {
      return todos.filter(todo => todo.completed);
    }
    default:
      return todos;
  }
};

// INPUT SELECTORS
const getFilter = state => state.todo.filter;
const getTodos = state => state.todo.todos;

/**
 * Selector
 *
 * @function getVisibleTodos
 * @param {array} input selectors - selector functions to access desired part of the state
 * @param {function} transform function - contain filtering logic to execute if the state has changed
 * @return {array} return todos
 */

// With a memoized selector we can recalculate todos when the value of state.todos or state.filter changes,
// but not when changes occur in other (unrelated) parts of the state tree.
const getVisibleTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case filters.SHOW_ALL:
        return todos;
      case filters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
      case filters.SHOW_COMPLETED: {
        return todos.filter(todo => todo.completed);
      }
      default:
        return todos;
    }
  }
);

TodoContainer.propTypes = {
  backgroundColor: PropTypes.string,
  todos: PropTypes.arrayOf(TodoProptype.PROPTYPES)
};

const mapStateToProps = state => {
  return {
    //todos: applyFilter(state.todo.todos, state.todo.filter), //original logic commented out
    todos: getVisibleTodos(state),
    backgroundColor: state.todo.backgroundColor
  };
};

export default connect(mapStateToProps, {
  loadTodos,
  addTodo,
  completeTodo,
  setFilter,
  setTheme
})(TodoContainer);