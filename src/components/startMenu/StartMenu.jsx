import React from 'react'
import './StartMenu.css'

export default function StartMenu() {
  return (
    <div className="start-container">



      <div className="welcomeDiv">
        <h1 className="welclass">Welcome to the</h1>
        <h1 className="welclass2">Frontend Quiz!</h1>
        <p>Pick a subject to get started.</p>
      </div>

      <div className="options">
        <button className="option html"><span>💻</span> HTML</button>
        <button className="option css"><span>🎨</span> CSS</button>
        <button className="option js"><span>⚡</span> Javascript</button>
        <button className="option access"><span>♿</span> Accessibility</button>
      </div>
    </div>
  )
}
