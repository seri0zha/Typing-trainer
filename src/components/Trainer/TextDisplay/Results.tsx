import styled from "styled-components";

const ResultsWrapper = styled.div`
  font-family: Verdana;
`;

const Results = () => {
  return (
    <ResultsWrapper>
      <div>
        Mistakes
      </div>
      <div>
        Mistake percentage
      </div>
      <div>
        CPM
      </div>
    </ResultsWrapper>
  )
}

export default Results;