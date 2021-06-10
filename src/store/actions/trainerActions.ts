import { INCREMENT_CURRENT_POSTITION, SET_TEXT } from "../constants";

export const incrementCurrentPosition = () => ({type: INCREMENT_CURRENT_POSTITION});
export const setText = (text: string) => ({type: SET_TEXT, payload: text});

