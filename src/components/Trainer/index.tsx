import { useState } from "react";
import styled from "styled-components";
import { fetchText } from "../../api";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCurrentPosition, setText } from "../../store/actions/trainerActions";
import TextDisplay from "./TextDisplay";
import Controls from "./Controls";
import TextInput from "./TextInput";

const TrainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Trainer = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector(state => state.trainer.text)
  const [currentSymbolColor, setCurrentSymbolColor] = useState('green');
  const onStartButtonClick = async () => {
    const response = await fetchText(1);
    const text = response?.data;

    // We must extract the text that's 
    // placed beetween <p> and </p> tags
    const textWithoutTags = text.substring(
      text.lastIndexOf('<p>') + 3,
      text.lastIndexOf('</p>'));
    dispatch(setText(textWithoutTags));
    dispatch(setCurrentPosition(0));
    setCurrentSymbolColor("green");
  }
  return (
    <TrainerWrapper>
      <TextDisplay 
        text={text}
        color={currentSymbolColor}/>
      <TextInput 
        setCurrentSymbolColor={setCurrentSymbolColor}/>
      <Controls
        onStartButtonClick={onStartButtonClick}/>
    </TrainerWrapper>
  )
}

export default Trainer;