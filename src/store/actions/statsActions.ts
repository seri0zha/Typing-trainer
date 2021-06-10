import { SET_CURRENT_MISTAKES } from "../constants";

export const setCurrentMistakes = (count: number) => ({
  type: SET_CURRENT_MISTAKES, 
  payload: count
});