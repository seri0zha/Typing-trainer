import styled from "styled-components";

interface OptionWrapperProps {
  title: string,
}

const Wrapper = styled.div`
  margin-left: 10px;
  height: 100%;
`;

const OptionWrapper: React.FC<OptionWrapperProps> = (props) => {
  return (
    <Wrapper>
      <span>
        {props.title}:
      </span>
      {props.children}
    </Wrapper>
  )
}

export default OptionWrapper;