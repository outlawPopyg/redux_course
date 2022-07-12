import {useSelector} from "react-redux";

export default function TodoList() {
    const {list: todos, status} = useSelector(state => state.todos);

    if (status === "pending") {
       return <code>Loading</code>
    } else if (status === "rejected") {
        return <code>Error</code>
    }

    return (
        <div>
            <code>Todos: { todos.length }</code>
        </div>
    );
}