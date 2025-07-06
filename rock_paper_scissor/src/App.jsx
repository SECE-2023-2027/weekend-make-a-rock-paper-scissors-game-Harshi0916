import React, { useState } from "react";
import "./App.css";

const App = () => {
  const choices = ["rock", "paper", "scissors"];
  const icons = {
    rock: "✊🏻",
    paper: "🤚🏻",
    scissors: "✌🏻",
  };

  const [started, setStarted] = useState(false);
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

  const handleStart = () => setStarted(true);

  return (
    <div className="game-wrapper">
      {/* 🎨 Background SVG */}
      <svg className="background-shape" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9a9e" />
            <stop offset="100%" stopColor="#fad0c4" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a1c4fd" />
            <stop offset="100%" stopColor="#c2e9fb" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fccb90" />
            <stop offset="100%" stopColor="#d57eeb" />
          </linearGradient>
        </defs>

        {/* Blob */}
        <path fill="url(#grad1)" opacity="0.35"
          d="M408,15Q470,80,540,140Q610,200,608,292Q606,384,555,457Q504,530,408,569Q312,608,240,540Q168,472,107,392Q46,312,76,225Q106,138,185,94Q264,50,336,32Q408,15,408,15Z">
          <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="60s" repeatCount="indefinite" />
        </path>

        {/* Circle shape */}
        <circle cx="700" cy="100" r="120" fill="url(#grad2)" opacity="0.2">
          <animate attributeName="r" values="120;140;120" dur="8s" repeatCount="indefinite" />
        </circle>

        {/* Bottom abstract path */}
        <path fill="url(#grad3)" opacity="0.25"
          d="M200,600 Q150,520 280,500 Q420,480 390,620 Q360,740 240,720 Q180,690 200,600 Z">
          <animateTransform attributeName="transform" type="rotate" from="0 300 600" to="360 300 600" dur="100s" repeatCount="indefinite" />
        </path>
      </svg>

      {!started ? (
        <div className="start-screen">
          <h1>👋 Welcome to</h1>
          <h2>Rock Paper Scissors</h2>
          <p>Click below to begin the game!</p>
          <button className="start-btn" onClick={handleStart}>
            ▶️ Start Game
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default App;
