const defaultState = [
  { id: 0, title: "Drink Cofee", completed: false },
  { id: 1, title: "Learn React", completed: true }
];

export const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false }
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    case "COMPLETE":
      return state.map((todo) =>
        todo.id !== action.payload
          ? todo
          : { ...todo, completed: !todo.completed }
      );
    default:
      return state;
  }
};
