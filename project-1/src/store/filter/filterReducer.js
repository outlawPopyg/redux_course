export const filterReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            if (state.includes(action.payload)) {
                return state;
            }
            return [...state, action.payload];
        case "REMOVE":
            return state.filter(f => f !== action.payload);
        case "REMOVE_ALL":
            return [];
        default:
            return state;
    }
}

export const addFilter = (filter) => ({ type: "ADD", payload: filter });
export const removeFilter = (filter) => ({ type: "REMOVE", payload: filter});
export const removeAllFilters = () => ({ type: "REMOVE_ALL" });