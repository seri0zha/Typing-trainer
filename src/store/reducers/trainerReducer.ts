import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { SET_CURRENT_INPUT_TEXT, SET_CURRENT_POSTITION, SET_LANGUAGE, SET_SENTENCES_COUNT, SET_TEXT, SET_TRAINING_IN_PROGRESS } from "../constants";

interface TrainerReducerState {
  text: string,
  currentInputText: string,
  currentPosition: number,
  trainingInProgress: boolean
  sentences: number,
  language: "ru" | "en",
}

const initialState: TrainerReducerState = {
  text: "",
  currentInputText: "",
  currentPosition: 0,
  trainingInProgress: false,
  sentences: 1,
  language: "ru",
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
        trainingInProgress: action.payload
      }
    default:
      return {...state};
  }
}

export default trainerReducer;