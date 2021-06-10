import styled from "styled-components";

interface ControlsProps {
  onStartButtonClick: () => Promise<void>,
}

const FetchButton = styled.button`
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

const Controls: React.FC<ControlsProps> = (props) => {
  return ( 
    <div>
      <FetchButton onClick={props.onStartButtonClick}>
        Fetch
      </FetchButton>
    </div>
  )
}

export default Controls;