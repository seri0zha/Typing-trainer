import { useState } from "react";
import styled from "styled-components";
import { fetchText } from "../../api";
import { useAppDispatch, useAppSelector } from "../../store";
import { setCurrentPosition, setText } from "../../store/actions/trainerActions";
import TextDisplay from "./TextDisplay";
import TextInput from "./TextInput";

const TrainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Trainer = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector(state => state.trainer.text);
  const [currentSymbolColor, setCurrentSymbolColor] = useState('green');
  const onButtonClick = async () => {
    const response = await fetchText(3);
    const text = response?.data;
    const removedTagsText = text.substring(
      text.lastIndexOf('<p>') + 3,
      text.lastIndexOf('</p>'));
    dispatch(setText(removedTagsText));
    dispatch(setCurrentPosition(0));
  }
  return (
    <TrainerWrapper>
      <TextDisplay 
        text={text}
        color={currentSymbolColor}/>
      <TextInput 
        setCurrentSymbolColor={setCurrentSymbolColor}/>
      <button onClick={onButtonClick}>
        Fetch
      </button>
    </TrainerWrapper>
  )
}

export default Trainer;