import styled from "styled-components";
import { useAppSelector } from "../../../../store";

const ResultsWrapper = styled.div`
  font-family: Verdana;
  display: flex;
  justify-content: space-between;
`;

const Results = () => {

  const stats = useAppSelector(state => state.stats);
  const textLength = useAppSelector(state => state.trainer.text.length);
  return (
    <>
    Your result:
      <ResultsWrapper>
        <div>
          {stats.current.mistakes} mistakes ({(stats.current.mistakes / textLength * 100).toFixed(1)}%)
        </div>
        <div>
          {Math.ceil(textLength / stats.current.time * 1000 * 60)} Chars per minute
        </div>
      </ResultsWrapper>
    </>
  )
}

export default Results;