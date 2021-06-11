import { RESET_CURRENT_STATS, SET_CURRENT_MISTAKES } from "../constants";

export const setCurrentMistakes = (count: number) => ({
  type: SET_CURRENT_MISTAKES, 
  payload: count
});

export const resetCurrentStats = () => ({
  type: RESET_CURRENT_STATS,
})