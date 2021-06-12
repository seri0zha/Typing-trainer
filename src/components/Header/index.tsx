import styled from "styled-components";
import { DivShadowWrapper } from "../ShadowWrapper";
import Stats from "./Stats";

const FlexHeader = styled.header`
  padding: 10px 20px;
  display: flex;
  opacity: 0.8;
  color: black;
  justify-content: space-between;
`;

const Wrapper = styled(DivShadowWrapper)`
  background-color: white;
  border-radius: 0 0 10px 10px;
`;

const Header = () => {
  return (
    <Wrapper>
      <FlexHeader>
        <div>
          Stats: - CPM
        </div>
        <div>Profile</div>
      </FlexHeader>
      <Stats/>
    </Wrapper>
  )
};

export default Header;
