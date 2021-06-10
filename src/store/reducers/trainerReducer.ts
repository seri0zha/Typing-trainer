import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { INCREMENT_CURRENT_POSTITION, SET_TEXT } from "../constants";

interface TrainerReducerState {
  text: string,
  currentPosition: number,
}

const initialState: TrainerReducerState = {
  text: "",
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
    
    case INCREMENT_CURRENT_POSTITION: 
      return {
        ...state,
        currentPosition: state.currentPosition + 1
      };
    
    default:
      return {...state};
  }
}

export default trainerReducer;