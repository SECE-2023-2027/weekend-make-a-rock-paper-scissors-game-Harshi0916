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

  const playGame = (user) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    const outcome = getWinner(user, computer);

    setUserChoice(user);
    setComputerChoice(computer);
    setResult(outcome);
    setShowResult(true);
  };

  const getWinner = (user, computer) => {
    if (user === computer) return "It's a Draw!";
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) return "You Win!";
    return "You Lose!";
  };

  const resetGame = () => {
    setShowResult(false);
    setResult("");
    setUserChoice("");
    setComputerChoice("");
  };

  if (showResult) {
    return (
      <div className="container result-page">
        <h1>{result}</h1>
        <div className="hands-display">
          <div className="player">
            <h3>You</h3>
            <div className="hand-icon">{icons[userChoice]}</div>
            <p>{userChoice.toUpperCase()}</p>
          </div>
          <div className="player">
            <h3>Computer</h3>
            <div className="hand-icon">{icons[computerChoice]}</div>
            <p>{computerChoice.toUpperCase()}</p>
          </div>
        </div>
        <button className="play-again" onClick={resetGame}>
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="hands-display">
        <div className="player">
          <h3>You</h3>
          <div className="hand-icon"> ✊🏻</div>
        </div>
        <div className="player">
          <h3>Computer</h3>
          <div className="hand-icon">✊🏻</div>
        </div>
      </div>

      <h1>Rock Paper Scissors</h1>
      <p>Choose your hand:</p>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {icons[choice]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;