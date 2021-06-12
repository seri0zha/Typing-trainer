import styled from "styled-components";
import { useAppSelector } from "../../../store";

const StatsWrapper = styled.div`
  color: green;
  opacity: 0.8;
  padding: 20px;
  border-radius: 0 0 10px 10px;
`;

const Stats: React.FC = () => {
  
  const [currentMistakes, textLength] = useAppSelector(state => 
    [state.stats.current.mistakes, state.trainer.text.length]
  );
  return (
    <StatsWrapper>
      <span>Current mistakes: {currentMistakes}</span>
      <span> {currentMistakes === 0 
        ? 0 
        : (currentMistakes/textLength * 100).toFixed(1)}%</span>
    </StatsWrapper>
  )
}

export default Stats;
