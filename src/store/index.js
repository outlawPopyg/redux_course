import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { client } from "../api";

import { rootReducer } from "./root-reducer";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(client)))
);