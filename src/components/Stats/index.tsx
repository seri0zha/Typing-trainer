import { useAppSelector } from "../../store";

const Stats = () => {
  const currentMistakes = useAppSelector(state => state.stats.mistakes.current);
  const textLength = useAppSelector(state => state.trainer.text.length);
  return (
    <div>
      <span>Current mistakes: {currentMistakes}</span>
      <span> {currentMistakes === 0 ? 0 : currentMistakes/textLength * 100}%</span>
    </div>
  )
}

export default Stats;
