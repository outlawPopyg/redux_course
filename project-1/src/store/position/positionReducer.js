export const positionReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ALL":
            return action.payload;
        default:
            return state;
    }
}

export const addAll = (state) => ({ type: "ADD_ALL", payload: state });