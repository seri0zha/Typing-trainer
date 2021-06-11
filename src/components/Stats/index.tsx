import styled from "styled-components";

interface StatsProps {
  currentMistakes: number,
  textLength: number
}

const StatsWrapper = styled.div`
  background-color: white;
  color: green;
  opacity: 0.8;
  padding: 20px;
  border-radius: 0 0 10px 10px;
`;

const Stats: React.FC<StatsProps> = (props) => {
  
  return (
    <StatsWrapper>
      <span>Current mistakes: {props.currentMistakes}</span>
      <span> {props.currentMistakes === 0 
        ? 0 
        : (props.currentMistakes/props.textLength * 100).toFixed(1)}%</span>
    </StatsWrapper>
  )
}

export default Stats;
