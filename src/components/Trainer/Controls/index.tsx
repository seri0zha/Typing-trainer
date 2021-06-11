import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../store";
import { setLanguage, setSentencesCount } from "../../../store/actions/trainerActions";
import OptionWrapper from "./OptionWrapper";

interface ControlsProps {
  onStartButtonClick: () => Promise<void>,
  language: "en" | "ru",
  sentencesCount: number,
}

const StartButton = styled.button`
  font-size: 1em;
  padding: 10px 20px;
  opacity: 0.9;
  background-color: white;
  border: 0;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectLanguage = styled.select`
  background-color: white;
  opacity: 0.8;
  font-size: 1em;
  border: 0;
  &option {
    background-color: white;
  }
  height: 100%;
`;

const SelectCount = styled.input`
  height: 100%;
  font-size: 1em;
  max-width: 50px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  color: black;
  grid-direction: row;
  margin-left: 10px;
`;

const Controls: React.FC<ControlsProps> = (props) => {

  const dispatch = useAppDispatch();
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(event.currentTarget.value as "en" || "ru"));
  }
  const handleSentencesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let count = Number(event.currentTarget.value);
    count = count > 10 ? 10 : count;
    dispatch(setSentencesCount(count));
  }
  return ( 
    <ControlsWrapper>
      <StartButton onClick={props.onStartButtonClick}>
        Start
      </StartButton>
      <Options>
        <OptionWrapper
          title="Sentences">
          <SelectCount
            type="number"
            min="1" max="10"
            value={props.sentencesCount}
            onKeyDown={() => false}
            onChange={handleSentencesChange}
            />
        </OptionWrapper>
        <OptionWrapper
          title="Language">
          <SelectLanguage
            value={props.language} 
            onChange={handleLanguageChange}>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </SelectLanguage>
        </OptionWrapper>
      </Options>
    </ControlsWrapper>
  )
}

export default Controls;