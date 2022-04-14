import { actionType } from "../Action";
import { preloadStatetype, ActionType } from "./../Action/type/index";
import { Reducer } from "redux";

const preloadState: preloadStatetype = [];

const TodosReducer: Reducer<preloadStatetype, actionType> = (
  state = preloadState,
  action
) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      const { name, priority } = action.payload;
      const newTodo = { title: name, priority: priority };
      state.forEach((obj, i) => {
        if (obj.id === action.id) {
          state[i]["Todos"].push(newTodo);
        }
      });
      return [...state];

    case ActionType.ADD_TITLE:
      const { title } = action;

      state.push({
        title: title,
        id: state.length + 1,
        level: action.payload.level,
        Todos: [],
      });
      return [...state];

    default:
      return state;
  }
};
export default TodosReducer;
