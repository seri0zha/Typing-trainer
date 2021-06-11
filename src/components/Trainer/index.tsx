import { useState } from "react";
import styled from "styled-components";
import { fetchText } from "../../api";
import { useAppDispatch } from "../../store";
import { setCurrentInputText, setCurrentPosition, setText } from "../../store/actions/trainerActions";
import TextDisplay from "./TextDisplay";
import Controls from "./Controls";
import TextInput from "./TextInput";
import { resetCurrentStats } from "../../store/actions/statsActions";

interface TrainerProps {
  text: string,
  symbolToHighlight: number,
}

const TrainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Trainer: React.FC<TrainerProps> = (props) => {
  const dispatch = useAppDispatch();
  const [currentSymbolColor, setCurrentSymbolColor] = useState('green');
  const onStartButtonClick = async () => {
    const response = await fetchText(1, 'en');
    const fetchedText = response?.data;
    // Response is the string which contains text
    // between <p> and </p> tags
    
    const textWithoutTags = fetchedText.substring(
      fetchedText.lastIndexOf('<p>') + 3,
      fetchedText.lastIndexOf('</p>'));

    dispatch(setText(textWithoutTags));
    dispatch(setCurrentPosition(0));
    dispatch(setCurrentInputText(''));
    dispatch(resetCurrentStats());
    setCurrentSymbolColor("green");
  }
  return (
    <TrainerWrapper>
      <TextDisplay 
        text={props.text}
        symbolToHighlight={props.symbolToHighlight}
        color={currentSymbolColor}/>
      <TextInput 
        setCurrentSymbolColor={setCurrentSymbolColor}/>
      <Controls
        onStartButtonClick={onStartButtonClick}/>
    </TrainerWrapper>
  )
}

export default Trainer;