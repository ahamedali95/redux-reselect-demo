import React from 'react';
import PropTypes from 'prop-types';

const ThemeSwitcher = ({ switchTheme }) => {
  return (
    <>
      <br />
      <button
        type="button"
        onClick={() => switchTheme("gray")}
      >
        Make it gray
      </button>
      <button
        type="button"
        onClick={() => switchTheme("white")}
      >
        Make it white
      </button>
    </>
  );
};

ThemeSwitcher.propTypes = {
  switchTheme: PropTypes.func.isRequired
};

export default ThemeSwitcher;