import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { SET_CURRENT_INPUT_TEXT, SET_CURRENT_POSTITION, SET_LANGUAGE, SET_SENTENCES_COUNT, SET_TEXT, SET_TRAINING_IN_PROGRESS, START_TRAINING, TOGGLE_FETCHING } from "../constants";

interface TrainerReducerState {
  text: string,
  currentInputText: string,
  currentPosition: number,
  sentences: number,
  language: "ru" | "en",
  status: {
    trainingInProgress: boolean,
    textIsFetching: boolean
  }
}

const initialState: TrainerReducerState = {
  text: "",
  currentInputText: "",
  currentPosition: 0,
  sentences: 1,
  language: "ru",
  status: {
    trainingInProgress: false,
    textIsFetching: false,
  },
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

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    
    case SET_SENTENCES_COUNT:
      return {
        ...state,
        sentences: action.payload
      }
    
    case SET_TRAINING_IN_PROGRESS:
      return {
        ...state,
        status: {
          ...state.status,
          trainingInProgress: action.payload
        }
      }
    case START_TRAINING: 
      return {
        ...state,
        status: {
          trainingInProgress: true,
          textIsFetching: false,
        },
        currentPosition: 0,
        currentInputText: '',
        text: action.payload,
      }
    case TOGGLE_FETCHING: 
      return {
        ...state,
        status: {
          ...state.status,
          textIsFetching: !state.status.textIsFetching
        }
      }
    default:
      return {...state};
  }
}

export default trainerReducer;