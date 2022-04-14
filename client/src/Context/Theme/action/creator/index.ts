import { actionType } from "../index";
import { Dispatch } from "redux";
import { ActionType } from "../type";

export const Toggle_Sidebar = () => {
  return (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: ActionType.TOGGLE_SIDEBAR,
    });
  };
};

export const Toggle_Theme = () => {
  return (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: ActionType.TOGGLE_THEME,
    });
  };
};
