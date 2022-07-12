import {useEffect} from "react";
import {loadAll as loadAllUsers} from "../store/users/userActions";
import { addAllTodos as loadAllTodos} from "../store/todos/todosActions";
import {useDispatch} from "react-redux";
import {UserList} from "./UserList";
import TodoList from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllUsers());
        dispatch(loadAllTodos());
    }, [dispatch]);

    return (
        <>
            <UserList/>
            <TodoList />
            <AddTodoForm />
        </>
    )
}