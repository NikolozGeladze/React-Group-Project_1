import React, { useState } from 'react';
import './Score.css';

export default function Score() {
  const [score, setScore] = useState(8);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [accessibilityEnabled, setAccessibilityEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  const handlePlayAgain = () => {
    
    console.log('Play Again clicked');
  };

  return (
    <div className={`quiz-container ${darkMode ? 'dark' : ''}`}>
      {}
      <div className="header-wrapper">
        <div className="header">
          <div className="header-left">
            <div className="icon-circle">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="header-title">Accessibility</span>
          </div>
          
          <div className="header-right">
         
          </div>
        </div>
      </div>

      {}
      <div className="content">
        {}
        <div className="left-section">
          <h1 className="main-title">Quiz completed</h1>
          <h2 className="sub-title">You scored...</h2>
        </div>

        {}
        <div className="right-section">
          <div className="score-card">
            <div className="card-header">
              <div className="card-icon-circle">
                <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="card-title">Accessibility</span>
            </div>

            <div className="score-display">
              <div className="score-number">{score}</div>
              <div className="score-total">out of {totalQuestions}</div>
            </div>

            <button onClick={handlePlayAgain} className="play-again-btn">
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}