import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { RESET_CURRENT_STATS, SET_CURRENT_MISTAKES, SET_TIME } from "../constants";

interface StatsState {
  current: {
    mistakes: number,
    charPerMinute: number,
    time: number,
  },
  overall: {
    mistakes: number,
    charPerMinute: number
  }
}

const initialState: StatsState = {
  current: {
    mistakes: 0,
    charPerMinute: 0,
    time: 0,
  },
  overall: {
    mistakes: 0,
    charPerMinute: 0,
  },
};

const statsReducer: Reducer<StatsState, AnyAction> = 
  (state = initialState, action): StatsState => {
  switch(action.type) {

    case SET_CURRENT_MISTAKES: {
      return {
        current: {
          ...state.current,
          mistakes: action.payload,
        },
        overall: {...state.overall}
      }
    }

    case SET_TIME: {
      return {
        ...state,
        current: {
          ...state.current,
          time: action.payload,
        },
        overall: {...state.overall}
      }
    }
    case RESET_CURRENT_STATS:
      return {...initialState};
    
    default:
      return {...state};
  }
};

export default statsReducer;