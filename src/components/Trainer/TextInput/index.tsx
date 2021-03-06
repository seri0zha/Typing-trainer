import { Dispatch, RefObject, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setCurrentMistakes, setTime } from "../../../store/actions/statsActions";
import { setCurrentInputText, setCurrentPosition, setTrainingInProgress } from "../../../store/actions/trainerActions";
import { InputShadowWrapper } from "../../ShadowWrapper";

interface TextInputProps {
  // useState action to set string color
  setCurrentSymbolColor: Dispatch<React.SetStateAction<string>>,
  inputRef: RefObject<HTMLInputElement>,
}

const Input = styled(InputShadowWrapper)`
  font-size: 1.3em;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: white;
  color: black;
  opacity: 0.8;
  border: 0;
  border-radius: 10px;
  font-family: "Noto Serif";
`;

const TextInput: React.FC<TextInputProps> = (props) => {
  const trainer = useAppSelector(state => state.trainer);
  const currentMistakes = useAppSelector(state => state.stats.current.mistakes);
  const [onMistake, setOnMistake] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<number>(0);
  const dispatch = useAppDispatch();
  
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value[e.currentTarget.value.length - 1];
    if (trainer.text !== '' && trainer.status.trainingInProgress) {
      
      // handle for the last char in input
      if (trainer.currentPosition === trainer.text.length - 1) {
        const endDate = new Date().getTime();
        dispatch(setTime(endDate - startDate));
        dispatch(setCurrentInputText(''));
        dispatch(setTrainingInProgress(false));

        // remove focus if last char typed
        props.inputRef?.current?.blur();
      } else {

        // if value of current input char is equal to current char in text
        if (value === trainer.text[trainer.currentPosition]) {
          if (trainer.currentPosition === 0)
            setStartDate(new Date().getTime());
          setOnMistake(false);
          props.setCurrentSymbolColor("green");
          dispatch(setCurrentInputText(trainer.currentInputText + value));
          dispatch(setCurrentPosition(trainer.currentPosition+1));

          // clear input after every word
          if (value === ' ') {
            dispatch(setCurrentInputText(''));
          }
        } else {
          // mistakes handle
          if (!onMistake) {
            dispatch(setCurrentMistakes(currentMistakes + 1));
          }
          setOnMistake(true);
          props.setCurrentSymbolColor("red");
        }
      }
    }
  }

  return (
    <Input
      ref={props.inputRef} 
      placeholder="..."
      disabled={!trainer.status.trainingInProgress}
      value={trainer.currentInputText} 
      onChange={onInputChange}/>
  )
};

export default TextInput;
