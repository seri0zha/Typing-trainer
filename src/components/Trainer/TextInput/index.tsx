import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setCurrentMistakes } from "../../../store/actions/statsActions";
import { setCurrentInputText, setCurrentPosition } from "../../../store/actions/trainerActions";

interface TextInputProps {
  // useState action to set string color
  setCurrentSymbolColor: React.Dispatch<React.SetStateAction<string>> 
}

const Input = styled.input`
  font-size: 1.5em;
  padding: 10px 20px;
`;

const TextInput: React.FC<TextInputProps> = (props) => {
  const trainer = useAppSelector(state => state.trainer);
  const currentMistakes = useAppSelector(state => state.stats.mistakes.current);
  const [onMistake, setOnMistake] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value[e.currentTarget.value.length - 1];
    if (trainer.text !== '') {
      if (value === trainer.text[trainer.currentPosition]) {
        setOnMistake(false);
        props.setCurrentSymbolColor("green");
        dispatch(setCurrentInputText(trainer.currentInputText + value));
        dispatch(setCurrentPosition(trainer.currentPosition+1));
        if (value === ' ') {
          dispatch(setCurrentInputText(''));
        }
      } else {
        if (!onMistake) {
          debugger;
          dispatch(setCurrentMistakes(currentMistakes + 1));
        }
        setOnMistake(true);
        props.setCurrentSymbolColor("red");
      }
    }
  }

  return (
    <Input 
      value={trainer.currentInputText} 
      onChange={onInputChange}/>
  )
};

export default TextInput;
