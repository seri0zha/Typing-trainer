import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setCurrentPosition } from "../../../store/actions/trainerActions";

interface TextInputProps {
  // useState action to set string color
  setCurrentSymbolColor: React.Dispatch<React.SetStateAction<string>> 
}

const Input = styled.input`
  font-size: 1.5em;
`;

const TextInput: React.FC<TextInputProps> = (props) => {
  const currentPosition = useAppSelector(state => state.trainer.currentPosition);
  const text = useAppSelector(state => state.trainer.text);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value[e.currentTarget.value.length - 1];

    if (value === text[currentPosition]) {
      props.setCurrentSymbolColor("green");
      setInputValue(prevState => prevState + value);
      dispatch(setCurrentPosition(currentPosition+1));

      if (value === ' ') {
        setInputValue('');
      }
    } else {
      props.setCurrentSymbolColor("red");
    }
  }

  return (
    <Input 
      value={inputValue} 
      onChange={onInputChange}/>
  )
};

export default TextInput;