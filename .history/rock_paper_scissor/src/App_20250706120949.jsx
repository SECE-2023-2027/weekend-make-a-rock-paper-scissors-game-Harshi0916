import React, { useState } from "react";
import "./App.css";

const App = () => {
  const choices = ["rock", "paper", "scissors"];
  const icons = {
    rock: "✊🏻",
    paper: "🤚🏻",
    scissors: "✌🏻",
  };

  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });

  const playGame = (user) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    const outcome = getWinner(user, computer);

    setUserChoice(user);
    setComputerChoice(computer);
    setResult(outcome);
    setShowResult(true);

    // Update score
    setScore((prevScore) => {
      if (outcome === "You Win!") return { ...prevScore, win: prevScore.win + 1 };
      if (outcome === "You Lose!") return { ...prevScore, lose: prevScore.lose + 1 };
      return { ...prevScore, draw: prevScore.draw + 1 };
    });
  };

  const getWinner = (user, computer) => {
    if (user === computer) return "It's a Draw!";
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    )
      return "You Win!";
    return "You Lose!";
  };

  const resetGame = () => {
    setShowResult(false);
    setResult("");
    setUserChoice("");
    setComputerChoice("");
  };

  return (
    <div className="container">
      <h1 className="title">Rock Paper Scissors</h1>

      <div className="scoreboard">
        <span>🏆 Wins: {score.win}</span>
        <span>💥 Losses: {score.lose}</span>
        <span>⚖️ Draws: {score.draw}</span>
      </div>

      {!showResult ? (
        <>
          <p className="subtitle">Choose your hand:</p>
          <div className="choices">
            {choices.map((choice) => (
              <button
                key={choice}
                onClick={() => playGame(choice)}
                className="choice-btn"
              >
                {icons[choice]}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="result-section">
          <h2 className="result-text">
            {result === "You Win!" ? "🎉" : result === "You Lose!" ? "😢" : "🤝"}{" "}
            {result}
          </h2>

          <div className="hands-display">
            <div className="player">
              <h3>You</h3>
              <div className="hand-icon bounce">{icons[userChoice]}</div>
              <p>{userChoice.toUpperCase()}</p>
            </div>
            <div className="player">
              <h3>Computer</h3>
              <div className="hand-icon bounce">{icons[computerChoice]}</div>
              <p>{computerChoice.toUpperCase()}</p>
            </div>
          </div>

          <button className="play-again" onClick={resetGame}>
            🔁 Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
