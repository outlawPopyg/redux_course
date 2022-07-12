import {useDispatch, useSelector} from "react-redux";
import {addTodoThunk} from "../store/todos/todosActions";

export const AddTodoForm = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.todos.status);

    const onHandleSubmit = e => {
        e.preventDefault();
        dispatch(addTodoThunk(e.target.title.value));
        e.target.reset();
    }

    if (status === "fulfilled") {
        return (
            <form onSubmit={onHandleSubmit}>
                <input name="title" type="text"/>
                <button>add</button>
            </form>
        )
    }
}