import styled from "styled-components";
import Header from "./components/Header";
import Trainer from "./components/Trainer";

const AppWrapper = styled.div`
  color: #ddd;
  font-size: 18px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header/>
      <Trainer/>
    </AppWrapper>
  );
}

export default App;
