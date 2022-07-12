const initialState = {
    status: "idle",
    list: [],
    error: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ALL_USERS":
            return { ...state, list: action.payload, status: "fulfilled"};
        case "users/SET_LOADING":
            return { ...state, status: "pending"};
        case "users/SET_ERROR":
            return { ...state, status: "rejected"};
        default:
            return state;
    }
};