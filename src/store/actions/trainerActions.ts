import { SET_CURRENT_POSTITION, SET_TEXT } from "../constants";

export const setCurrentPosition = (position: number) => ({
  type: SET_CURRENT_POSTITION, 
  payload: position
});
export const setText = (text: string) => ({
  type: SET_TEXT, 
  payload: text
});

