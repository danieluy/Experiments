let nextTodoId = 2

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter }
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: { id }
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: { id }
  }
}