import {combineReducers} from "redux";
import { userReducer } from "./users/userReducer";
import { todosReducer } from "./todos/todosReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    todos: todosReducer
});