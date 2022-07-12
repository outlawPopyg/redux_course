const initialState = {
    status: "idle",
    list: [],
    error: null
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ALL_TODOS":
            return {...state , list: action.payload, status: "fulfilled"};
        case "ADD_TODO":
            return { ...state, list: [...state.list, action.payload], status: "fulfilled" };
        case "todos/SET_LOADING":
            return { ...state, status: "pending"};
        case "todos/SET_ERROR":
            return { ...state, status: "rejected"};
        default:
            return state;
    }
};