export const userReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ALL":
            state = action.payload;
        default:
            return state;
    }
};