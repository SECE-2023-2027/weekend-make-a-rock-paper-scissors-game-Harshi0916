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
  const [player1Choice, setPlayer1Choice] = useState("");
  const [player2Choice, setPlayer2Choice] = useState("");
  const [step, setStep] = useState(1);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ p1: 0, p2: 0, draw: 0 });

  const handleChoice = (choice) => {
    if (step === 1) {
      setPlayer1Choice(choice);
      setStep(2);
    } else if (step === 2) {
      setPlayer2Choice(choice);
      const outcome = getWinner(player1Choice, choice);
      setResult(outcome);

      setScore((prev) => {
        if (outcome === "Player 1 Wins!") return { ...prev, p1: prev.p1 + 1 };
        if (outcome === "Player 2 Wins!") return { ...prev, p2: prev.p2 + 1 };
        return { ...prev, draw: prev.draw + 1 };
      });

      setStep(3);
    }
  };

  const getWinner = (p1, p2) => {
    if (p1 === p2) return "It's a Draw!";
    if (
      (p1 === "rock" && p2 === "scissors") ||
      (p1 === "scissors" && p2 === "paper") ||
      (p1 === "paper" && p2 === "rock")
    )
      return "Player 1 Wins!";
    return "Player 2 Wins!";
  };

  const resetRound = () => {
    setStep(1);
    setPlayer1Choice("");
    setPlayer2Choice("");
    setResult("");
  };

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

        <path fill="url(#grad1)" opacity="0.35"
          d="M408,15Q470,80,540,140Q610,200,608,292Q606,384,555,457Q504,530,408,569Q312,608,240,540Q168,472,107,392Q46,312,76,225Q106,138,185,94Q264,50,336,32Q408,15,408,15Z">
          <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="60s" repeatCount="indefinite" />
        </path>
        <circle cx="700" cy="100" r="120" fill="url(#grad2)" opacity="0.2">
          <animate attributeName="r" values="120;140;120" dur="8s" repeatCount="indefinite" />
        </circle>
        <path fill="url(#grad3)" opacity="0.25"
          d="M200,600 Q150,520 280,500 Q420,480 390,620 Q360,740 240,720 Q180,690 200,600 Z">
          <animateTransform attributeName="transform" type="rotate" from="0 300 600" to="360 300 600" dur="100s" repeatCount="indefinite" />
        </path>
      </svg>

      {!started ? (
        <div className="start-screen">
          <h1>🎮 Multiplayer Mode</h1>
          <h2>Rock Paper Scissors</h2>
          <p>2 Players - Take Turns to Choose</p>
          <button className="start-btn" onClick={() => setStarted(true)}>
            ▶️ Start Game
          </button>
        </div>
      ) : (
        <div className="container">
          <h1 className="title">Rock Paper Scissors (Multiplayer)</h1>

          <div className="scoreboard">
            <span>👤 Player 1: {score.p1}</span>
            <span>👤 Player 2: {score.p2}</span>
            <span>🤝 Draws: {score.draw}</span>
          </div>

          {step <= 2 && (
            <>
              <h2 className="subtitle">
                {step === 1 ? "Player 1, make your choice:" : "Player 2, it's your turn:"}
              </h2>
              <div className="choices">
                {choices.map((choice) => (
                  <button
                    key={choice}
                    onClick={() => handleChoice(choice)}
                    className="choice-btn"
                  >
                    {icons[choice]}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <div className="result-section">
              <h2 className="result-text">
                {result.includes("1") ? "🎉" : result.includes("2") ? "🔥" : "🤝"} {result}
              </h2>

              <div className="hands-display">
                <div className="player">
                  <h3>Player 1</h3>
                  <div className="hand-icon bounce">{icons[player1Choice]}</div>
                  <p>{player1Choice.toUpperCase()}</p>
                </div>
                <div className="player">
                  <h3>Player 2</h3>
                  <div className="hand-icon bounce">{icons[player2Choice]}</div>
                  <p>{player2Choice.toUpperCase()}</p>
                </div>
              </div>

              <button className="play-again" onClick={resetRound}>
                🔁 New Round
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
