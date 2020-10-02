import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {filters} from '../constants';

const TodoFilter = ({ applyFilter }) => {
  const handleClick = e => {
    applyFilter(e.target.name);
  };

  return (
    <>
      Show:
      {
        Object.values(filters).map((filter, idx) => {
          return (
            <button
              key={idx}
              style={{ display: 'inline', marginLeft: "10px" }}
              name={filter}
              onClick={handleClick}
            >
              {filter.split("_")[1]}
            </button>
          )
        })
      }
    </>
  );
};

TodoFilter.propTypes = {
  applyFilter: PropTypes.func.isRequired
};

export default memo(TodoFilter);