import styled from "styled-components";
import { useAppSelector } from "../../../store";

const TextWrapper = styled.div`
  font-size: 1.5em;
  background-color: #dedede;
  color: #222;
  padding: 10px 20px;
  width: 100%;
  border-radius: 5px;
  line-height: 1.5em;
`;

const SpanHighlighted = styled.span`
  color: #dedede;
  background-color: ${props => props.color};
`;

interface TextDisplayProps {
  text: string,
  color: string,
}

const TextDisplay: React.FC<TextDisplayProps> = (props) => {
  const symbolToHighlight = useAppSelector(state => state.trainer.currentPosition);
  const splittedText = [
    <span>{props.text.slice(0, symbolToHighlight)}</span>, 
    <SpanHighlighted color={props.color}>{props.text[symbolToHighlight]}</SpanHighlighted>, 
    <span>{props.text.slice(symbolToHighlight+1, props.text.length)}</span>
  ];

  return (
    <TextWrapper>
      {splittedText}
    </TextWrapper>
  )
};

export default TextDisplay;