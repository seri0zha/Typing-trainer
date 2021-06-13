import { SET_CURRENT_INPUT_TEXT, SET_CURRENT_POSTITION, SET_LANGUAGE, SET_SENTENCES_COUNT, SET_TEXT, SET_TRAINING_IN_PROGRESS, START_TRAINING, TOGGLE_FETCHING } from "../constants";

export const setCurrentPosition = (position: number) => ({
  type: SET_CURRENT_POSTITION, 
  payload: position
});
export const setText = (text: string) => ({
  type: SET_TEXT, 
  payload: text
});

export const setCurrentInputText = (text: string) => ({
  type: SET_CURRENT_INPUT_TEXT,
  payload: text
});

export const setLanguage = (language: "en" | "ru") => ({
  type: SET_LANGUAGE,
  payload: language
});

export const setSentencesCount = (count: number) => ({
  type: SET_SENTENCES_COUNT,
  payload: count
});

export const setTrainingInProgress = (inProgress: boolean) => ({
  type: SET_TRAINING_IN_PROGRESS,
  payload: inProgress,
});

export const startTraining = (text: string) => ({
  type: START_TRAINING,
  payload: text,
});

export const toggleFetching = () => ({
  type: TOGGLE_FETCHING,
});