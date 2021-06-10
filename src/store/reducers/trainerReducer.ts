import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { SET_CURRENT_INPUT_TEXT, SET_CURRENT_POSTITION, SET_TEXT } from "../constants";

interface TrainerReducerState {
  text: string,
  currentInputText: string,
  currentPosition: number,
}

const initialState: TrainerReducerState = {
  text: "",
  currentInputText: "",
  currentPosition: 0
};

const trainerReducer: Reducer<TrainerReducerState, AnyAction> = 
  (state = initialState, action): TrainerReducerState => {
  switch(action.type) {
    case SET_TEXT:
      return {
        ...state, 
        text: action.payload
      };
    
    case SET_CURRENT_POSTITION: 
      return {
        ...state,
        currentPosition: action.payload
      };
    
    case SET_CURRENT_INPUT_TEXT:
      return {
        ...state,
        currentInputText: action.payload
      }
    default:
      return {...state};
  }
}

export default trainerReducer;