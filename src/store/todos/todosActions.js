

const addAll = (todos) => ({ type: "ADD_ALL_TODOS", payload: todos});
const setLoading = () => ({ type: "todos/SET_LOADING"});
const setError = () => ({ type: "todos/SET_ERROR"});
const addTodo = (todo) => ({ type: "ADD_TODO", payload: todo });

export const addTodoThunk = (title) => (dispatch, _, client) => {
    dispatch(setLoading());

    client.post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
        userId: 1
    }).then(res => dispatch(addTodo(res)));
}

export const addAllTodos = () => (dispatch, _, client) => {
    dispatch(setLoading());

    client.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => dispatch(addAll(res)))
        .catch(e => dispatch(setError()));
};