import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Home from './components/Home';
import todoReducer from './reducers/todoReducer';

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
