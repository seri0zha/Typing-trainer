import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { SET_CURRENT_MISTAKES } from "../constants";

interface StatsState {
  mistakes: {
    overall: number,
    current: number,
  },
  charactersPerMinute: number,
}

const initialState: StatsState = {
  mistakes: {
    overall: 0,
    current: 0,
  },
  charactersPerMinute: 0,
};

const statsReducer: Reducer<StatsState, AnyAction> = 
(state = initialState, action): StatsState => {
  switch(action.type) {
    case SET_CURRENT_MISTAKES: {
      let mistakes = {
        ...state.mistakes,
        current: action.payload
      };
      return {
        ...state,
        mistakes
      }
    }
    default:
      return {...state}
  }
};

export default statsReducer;