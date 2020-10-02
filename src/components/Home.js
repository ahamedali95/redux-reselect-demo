import React from 'react';
import TodoContainer from './TodoContainer';

const Home = props => {
  return (
    <>
      <h1 style={{ fontStyle: 'italic'}}>Todo Manager</h1>
      <TodoContainer />
    </>
  );
};

export default Home;

