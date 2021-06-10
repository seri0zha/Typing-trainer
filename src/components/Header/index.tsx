import styled from "styled-components";

const FlexHeader = styled.header`
  padding: 10px 20px;
  display: flex;
  background-color: #555;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <FlexHeader>
      <div>
        Average CPM/error: 256/5%
      </div>
      <div>Profile</div>
    </FlexHeader>
  )
};

export default Header;
