import StatisticLine from "./StatisticLine";

function Statistics({ wins, losses, draws }) {
  const totalMatches = wins + losses + draws;
  const winRate = (wins / totalMatches) * 100;

  return (
    <div className="statistics">
      <h2>Match Statistics</h2>

      <StatisticLine text="Wins" value={wins} />
      <StatisticLine text="Losses" value={losses} />
      <StatisticLine text="Draws" value={draws} />
      <StatisticLine text="Total Matches" value={totalMatches} />
      <StatisticLine text="Win Rate" value={`${winRate.toFixed(1)}%`} />
    </div>
  );
}

export default Statistics;