import { combineReducers, createStore } from "redux";
import { todosReducer, filterReducer } from "./reducers";
import { loadStore, saveStore } from "./localStorage";

const rootReducer = combineReducers({
  todosReducer
  // filterReducer
});

export const configureStore = () => {
  const loadedState = loadStore();

  const store = createStore(rootReducer, loadedState);

  store.subscribe(() => {
    saveStore({ todosReducer: store.getState().todosReducer });
  });

  return store;
};
