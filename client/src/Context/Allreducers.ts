import { combineReducers } from "redux";
import Themereducer from "./Theme/reducers";
import TodosReducer from "./Todos/reducers";

const AllReducers = combineReducers({
  theme: Themereducer,
  todos: TodosReducer,
});

export default AllReducers;

export type State = ReturnType<typeof AllReducers>;
