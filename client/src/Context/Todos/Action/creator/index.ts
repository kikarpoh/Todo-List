import { actionType } from "../index";
import { Dispatch } from "redux";
import { ActionType } from "../type";

export type Props = {
  name: string;
  priority: number;
  id: number;
};

export type Add_Title_Props = {
  level: number;
  title: string;
};
export const Add_Todo = ({ name, priority, id }: Props) => {
  return (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: ActionType.ADD_TODO,
      id: id,
      payload: {
        name: name,
        priority: priority,
      },
    });
  };
};

export const Add_Title = ({ title, level }: Add_Title_Props) => {
  return (dispatch: Dispatch<actionType>) => {
    dispatch({
      type: ActionType.ADD_TITLE,
      title: title,
      payload: { level: level },
    });
  };
};
