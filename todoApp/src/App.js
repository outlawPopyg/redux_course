import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  createTodo,
  removeTodo,
  completeTodo
} from "./store/actions/todosActions";
import { useSelector, useDispatch } from "react-redux";
import { activeTodos, completedTodos } from "./store/selectors/todosSelectors";

export default function App() {
  const { filter = "all" } = useParams();

  const todos = useSelector((state) => {
    switch (filter) {
      case "active":
        return activeTodos(state);
      case "completed":
        return completedTodos(state);
      default:
        return state.todosReducer;
    }
  });

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(createTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="title" type="text" />
        <input type="submit" value="add" />
      </form>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/all">all</Link>
        <Link to="/completed">completed</Link>
        <Link to="/active">active</Link>
      </div>

      <ul>
        {todos.map((todo) => {
          return (
            <div style={{ marginTop: "10px" }} key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(completeTodo(todo.id))}
              />
              <li style={{ display: "inline-block" }}>{todo.title}</li>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                style={{ marginLeft: "10px" }}
              >
                delete
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
