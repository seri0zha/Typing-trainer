import styled from "styled-components";
import Header from "./components/Header";
import Trainer from "./components/Trainer";
import Stats from "./components/Header/Stats";
import { useAppSelector } from "./store";

const AppWrapper = styled.div`
  color: #ddd;
  font-size: 18px;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  font-family: sans-serif;
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
