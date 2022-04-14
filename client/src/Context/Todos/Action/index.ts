import { ActionType } from "./type";

interface Add_Todo {
  type: ActionType.ADD_TODO;
  id: number;
  payload: {
    name: string;
    priority: number;
  };
}

interface Add_Title {
  type: ActionType.ADD_TITLE;
  title: string;
  payload: { level: number };
}

export type actionType = Add_Todo | Add_Title;
