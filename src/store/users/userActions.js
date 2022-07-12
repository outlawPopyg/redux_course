const addAll = (users) => ({type: "ADD_ALL_USERS", payload: users});
const setLoading = { type: "users/SET_LOADING" };
const setError = { type: "users/SET_ERROR"};

export const loadAll = () => (dispatch, _, client) => {
    dispatch(setLoading);

    client.get("https://jsonplaceholder.typicode.com/users")
        .then(res => dispatch(addAll(res)))
        .catch(err => dispatch(setError));
};