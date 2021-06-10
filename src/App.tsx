import styled from "styled-components";
import Header from "./components/Header";
import Trainer from "./components/Trainer";
import Stats from "./components/Stats";

const AppWrapper = styled.div`
  color: #ddd;
  font-size: 18px;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header/>
      <Stats/>
      <Trainer/>
    </AppWrapper>
  );
}

export default App;
