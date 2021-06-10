import styled from "styled-components";

const FlexHeader = styled.header`
  padding: 10px;
  display: flex;
  width: 100%;
  background-color: #555;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <FlexHeader>
      <div>Stats (login required)</div>
      <div>Profile</div>
    </FlexHeader>
  )
};

export default Header;
