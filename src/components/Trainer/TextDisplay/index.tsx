import styled from "styled-components";

const TextWrapper = styled.div`
  font-size: 1.5em;
  background-color: white;
  color: black;
  opacity: 0.8;
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 10px;
  line-height: 1.5em;
  font-family: "Noto Serif";
  user-select: none;
`;

const PassedText = styled.span`
  color: #999;
`;

const CurrentSymbol = styled.span`
  color: #dedede;
  background-color: ${props => props.color};
`;

const StartBanner = styled.div`
  text-align: center;
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
      {props.text.length > 0 
        ? splittedText
        : (
          <StartBanner>
            Press "Start" button to get the text and start whenever you're ready
          </StartBanner>
        )}
    </TextWrapper>
  )
};

export default TextDisplay;