import { MutableRefObject, useRef, useState } from "react";
import styled from "styled-components";
import { fetchText } from "../../api";
import { useAppDispatch, useAppSelector } from "../../store";
import { startTraining } from "../../store/actions/trainerActions";
import TextDisplay from "./TextDisplay";
import Controls from "./Controls";
import TextInput from "./TextInput";
import { resetCurrentStats } from "../../store/actions/statsActions";

const TrainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Trainer: React.FC = () => {
  //ref for input field
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const trainer = useAppSelector(state => state.trainer);
  const [sentencesCount, language] = useAppSelector(
    state => [state.trainer.sentences, state.trainer.language]
  );
  const [currentSymbolColor, setCurrentSymbolColor] = useState('green');
  const dispatch = useAppDispatch();
  const onStartButtonClick = async () => {
    const text = await fetchText(sentencesCount, language);
    dispatch(startTraining(text));
    dispatch(resetCurrentStats());
    setCurrentSymbolColor("green");
    inputRef.current.focus();
  }
  return (
    <TrainerWrapper>
      <TextDisplay
        trainingInProgress={trainer.trainingInProgress}
        text={trainer.text}
        symbolToHighlight={trainer.currentPosition}
        color={currentSymbolColor}/>
      <TextInput
        inputRef={inputRef}
        setCurrentSymbolColor={setCurrentSymbolColor}/>
      <Controls
        sentencesCount={sentencesCount}
        language={language}
        onStartButtonClick={onStartButtonClick}/>
    </TrainerWrapper>
  )
}

export default Trainer;