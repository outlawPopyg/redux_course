export const createTodo = (title) => {
  return { type: "ADD", payload: title };
};

export const removeTodo = (id) => {
  return { type: "REMOVE", payload: id };
};

export const completeTodo = (id) => {
  return { type: "COMPLETE", payload: id };
};
