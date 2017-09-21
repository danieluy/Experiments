import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <li
    className="todo-item"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text} <span onClick={onDelete} style={{ zIndex: 10 }}>&times;</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo