import styled from "styled-components";
import { useAppSelector } from "../../../store";

const TextWrapper = styled.div`
  font-size: 1.5em;
  background-color: white;
  color: black;
  opacity: 0.8;
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 10px;
  line-height: 1.5em;
`;

const PassedText = styled.span`
  color: #999;
`;

const CurrentSymbol = styled.span`
  color: #dedede;
  background-color: ${props => props.color};
`;

interface TextDisplayProps {
  text: string,
  color: string,
  symbolToHighlight: number,
}

const TextDisplay: React.FC<TextDisplayProps> = (props) => {
  const splittedText = [
    <PassedText>{props.text.slice(0, props.symbolToHighlight)}</PassedText>, 
    <CurrentSymbol color={props.color}>{props.text[props.symbolToHighlight]}</CurrentSymbol>, 
    <span>{props.text.slice(props.symbolToHighlight+1, props.text.length)}</span>
  ];

  return (
    <TextWrapper>
      {splittedText}
    </TextWrapper>
  )
};

export default TextDisplay;