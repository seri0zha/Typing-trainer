import styled from "styled-components";

const shadowString: string = "rgba(0, 0, 0, 0.24) 0px 3px 8px;";

export const DivShadowWrapper = styled.div`
  -webkit-box-shadow: ${shadowString};
  -moz-box-shadow: ${shadowString};
  box-shadow: ${shadowString};
`;

export const InputShadowWrapper = styled.input`
  -webkit-box-shadow: ${shadowString};
  -moz-box-shadow: ${shadowString};
  box-shadow: ${shadowString};
`;

export const ButtonShadowWrapper = styled.button`
  -webkit-box-shadow: ${shadowString};
  -moz-box-shadow: ${shadowString};
  box-shadow: ${shadowString};
`;
