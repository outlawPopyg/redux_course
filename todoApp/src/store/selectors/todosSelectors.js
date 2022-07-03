export const activeTodos = (state) =>
  state.todosReducer.filter((todo) => !todo.completed);

export const completedTodos = (state) =>
  state.todosReducer.filter((todo) => todo.completed);
