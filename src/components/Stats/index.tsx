interface StatsProps {
  currentMistakes: number,
  textLength: number
}

const Stats: React.FC<StatsProps> = (props) => {
  
  return (
    <div>
      <span>Current mistakes: {props.currentMistakes}</span>
      <span> {props.currentMistakes === 0 
        ? 0 
        : (props.currentMistakes/props.textLength * 100).toFixed(1)}%</span>
    </div>
  )
}

export default Stats;
