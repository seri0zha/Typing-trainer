import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setLanguage, setSentencesCount } from "../../../store/actions/trainerActions";
import Loader from "../../Loader";
import { ButtonShadowWrapper } from "../../ShadowWrapper";
import OptionWrapper from "./OptionWrapper";

interface ControlsProps {
  onStartButtonClick: () => Promise<void>,
  language: "en" | "ru",
  sentencesCount: number,
}

const StartButton = styled(ButtonShadowWrapper)`
  font-size: 1em;
  padding: 10px 20px;
  opacity: 0.8;
  background-color: white;
  border: 0;
  border-radius: 5px;
  transition: 0.3s;
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
  box-sizing: border-box;
  border: 1px solid #999;
  margin-left: 10px;
  &option {
    background-color: white;
  }
  height: 100%;
`;

const SelectCount = styled.input`
  height: 100%;
  font-size: 1em;
  max-width: 50px;
  box-sizing: border-box;
  border: 1px solid #999;
  margin: 0 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

const Controls: React.FC<ControlsProps> = (props) => {

  const dispatch = useAppDispatch();
  const textIsFetching = useAppSelector(state => state.trainer.status.textIsFetching);
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(event.currentTarget.value as "en" || "ru"));
  }
  const handleSentencesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let count = Number(event.currentTarget.value);
    count = count > 6 ? 6 : count;
    dispatch(setSentencesCount(count));
  }
  return ( 
    <ControlsWrapper>
      <Wrapper>
        <StartButton onClick={props.onStartButtonClick}>
          Start
        </StartButton>
        {textIsFetching ? <Loader/> : ""}
      </Wrapper>
      <Wrapper>
        <OptionWrapper
          title="Sentences">
          <SelectCount
            type="number"
            min="1" max="6"
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
      </Wrapper>
    </ControlsWrapper>
  )
}

export default Controls;