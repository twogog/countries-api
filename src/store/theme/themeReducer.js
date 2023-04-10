import { CHANGE_THEME } from "./actions";
import { themes } from "./actions";

export const themeReducer = (state = themes.dark, action) => {
  if (action.type === CHANGE_THEME) {
    return action.payload;
  }
  return state;
};