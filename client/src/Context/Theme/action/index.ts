import { ActionType } from "./type";

interface Toggle_Sidebar {
  type: ActionType.TOGGLE_SIDEBAR;
}
interface Toggle_Theme {
  type: ActionType.TOGGLE_THEME;
}


export type actionType = Toggle_Sidebar | Toggle_Theme