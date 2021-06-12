import { MutableRefObject, useRef, useState } from "react";
import styled from "styled-components";
import { fetchText } from "../../api";
import { useAppDispatch, useAppSelector } from "../../store";
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
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [sentencesCount, language] = useAppSelector(
    state => [state.trainer.sentences, state.trainer.language]
  );
  const [textFinished, setTextFinished] = useState<boolean>(false);
  const [currentSymbolColor, setCurrentSymbolColor] = useState('green');
  const dispatch = useAppDispatch();
  const onStartButtonClick = async () => {
    const text = await fetchText(sentencesCount, language);
    setTextFinished(false);
    dispatch(setText(text));
    dispatch(setCurrentPosition(0));
    dispatch(setCurrentInputText(''));
    dispatch(resetCurrentStats());
    setCurrentSymbolColor("green");
    inputRef.current.focus();
  }
  return (
    <TrainerWrapper>
      <TextDisplay 
        text={props.text}
        symbolToHighlight={props.symbolToHighlight}
        color={currentSymbolColor}
        textFinished={textFinished}/>
      <TextInput
        inputRef={inputRef}
        setTextFinished={setTextFinished}
        setCurrentSymbolColor={setCurrentSymbolColor}/>
      <Controls
        sentencesCount={sentencesCount}
        language={language}
        onStartButtonClick={onStartButtonClick}/>
    </TrainerWrapper>
  )
}

export default Trainer;