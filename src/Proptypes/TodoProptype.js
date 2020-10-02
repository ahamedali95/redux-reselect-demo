import PropTypes from 'prop-types';

class TodoProptype {
  static PROPTYPES = PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  })
}

export default TodoProptype;