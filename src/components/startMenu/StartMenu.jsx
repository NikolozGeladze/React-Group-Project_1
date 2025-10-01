import React from 'react'
import './StartMenu.css'

export default function StartMenu() {
  return (
    <div className="start-container">



      <div className="welcomeDiv rubik">
        <div className="secendWelD">
        <h1 className="welclass">Welcome to the</h1>
        <h1 className="welclass2">Frontend Quiz!</h1>
        </div>

        <p>Pick a subject to get started.</p>
      </div>

      <div className="options">
        <button><span><i class="fa-solid fa-code" id='Html'></i></span> HTML</button>
        <button><span><i class="fa-solid fa-brush" id='Css'></i></span> CSS</button>
        <button><span><i class="fa-brands fa-square-js" id='Js'></i></span> Javascript</button>
        <button><span><i class="fa-solid fa-person" id='Acc'></i></span> Accessibility</button>
      </div>
    </div>
  )
}
