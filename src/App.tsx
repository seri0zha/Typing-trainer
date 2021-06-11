import styled from "styled-components";
import Header from "./components/Header";
import Trainer from "./components/Trainer";
import Stats from "./components/Stats";
import { useAppSelector } from "./store";

const AppWrapper = styled.div`
  color: #ddd;
  font-size: 18px;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
`;

const App = () => {
  const trainer = useAppSelector(state => state.trainer);
  const stats = useAppSelector(state => state.stats);
  return (
    <AppWrapper>
      <Header/>
      <Stats
        currentMistakes={stats.current.mistakes}
        textLength={trainer.text.length}/>
      <Trainer
        text={trainer.text}
        symbolToHighlight={trainer.currentPosition}/>
    </AppWrapper>
  );
}

export default App;
