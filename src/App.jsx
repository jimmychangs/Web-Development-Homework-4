import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  const increaseWins = () => {
    setWins(wins + 1);
  };

  const increaseLosses = () => {
    setLosses(losses + 1);
  };

  const increaseDraws = () => {
    setDraws(draws + 1);
  };

  const totalMatches = wins + losses + draws;

  return (
    <div className="app">
      <h1>Video Game Match Tracker</h1>

      <p>
        Track your match results by clicking Win, Loss, or Draw after each game.
      </p>

      <div className="button-container">
        <Button handleClick={increaseWins} text="Win" />
        <Button handleClick={increaseLosses} text="Loss" />
        <Button handleClick={increaseDraws} text="Draw" />
      </div>

      {totalMatches === 0 ? (
        <p>No match data collected yet.</p>
      ) : (
        <Statistics wins={wins} losses={losses} draws={draws} />
      )}
    </div>
  );
}

export default App;