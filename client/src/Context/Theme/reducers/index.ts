import { Reducer } from "redux";
import { actionType } from "../action/index";
import { ActionType } from "../action/type";

const preloadState = {
  IsSidebarEnable: false,
  Theme: "Light",
};

type PreloadState = {
  IsSidebarEnable: boolean;
  Theme: "Light" | "Dark" | string;
};
const Themereducer: Reducer<PreloadState, actionType> = (
  state = preloadState,
  action
): PreloadState => {
  switch (action.type) {
    case ActionType.TOGGLE_SIDEBAR:
      return {
        ...state,
        IsSidebarEnable: !state.IsSidebarEnable,
      };
    case ActionType.TOGGLE_THEME:
      return {
        ...state,
        Theme: state.Theme === "Light" ? "Dark" : "Light",
      };
    default:
      return state;
  }
};

export default Themereducer;
