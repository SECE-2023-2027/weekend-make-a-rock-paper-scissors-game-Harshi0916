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
    <div className="game-wrapper">
      {/* Background SVG */}
      <svg className="background-shape" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9a9e" />
            <stop offset="100%" stopColor="#fad0c4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient)"
          opacity="0.3"
          d="M408,15Q470,80,540,140Q610,200,608,292Q606,384,555,457Q504,530,408,569Q312,608,240,540Q168,472,107,392Q46,312,76,225Q106,138,185,94Q264,50,336,32Q408,15,408,15Z"
        />
      </svg>

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
                <button key={choice} onClick={() => playGame(choice)} className="choice-btn">
                  {icons[choice]}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="result-section">
            <h2 className="result-text">
              {result === "You Win!" ? "🎉" : result === "You Lose!" ? "😢" : "🤝"} {result}
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
    </div>
  );
};

export default App;
