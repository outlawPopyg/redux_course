const addAll = (users) => ({type: "ADD_ALL", payload: users});

export const loadAll = () => (dispatch, getState) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => dispatch(addAll(res)));
};