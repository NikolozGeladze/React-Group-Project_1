import React, { useState } from 'react'
import './StartMenu.css'
import { Link } from 'react-router-dom'

export default function StartMenu() {

  return (
    <div className="start-container">
      <div className="welcomeDiv">
        <div className="secendWelD">
        <h1 className="welclass">Welcome to the</h1>
        <h1 className="welclass2">Frontend Quiz!</h1>
        </div>

        <p><i>Pick a subject to get started.</i></p>
      </div>

      <div className="options">
        <Link className='link' to={`/quiz/${'HTML'}`}><div><span><i className="fa-solid fa-code" id='Html'></i></span>HTML</div></Link>
        <Link className='link' to={`/quiz/${'CSS'}`}><div><span><i className="fa-solid fa-brush" id='Css'></i></span>CSS</div></Link>
        <Link className='link' to={`/quiz/${'Javascript'}`}><div><span><i className="fa-brands fa-square-js" id='Js'></i></span>Javascript</div></Link>
        <Link className='link' to={`/quiz/${'Accessibility'}`}><div><span><i className="fa-solid fa-person" id='Acc'></i></span>Accessibility</div></Link>
      </div>
    </div>
  )
}
