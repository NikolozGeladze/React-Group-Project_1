import React, { useState } from 'react'
import './Quiz.css'

export default function Quiz() {
    const [questionsCount, setQuestionsCount] = useState(1)

  return (
    <>
        <div className="quiz-container">
            <div className="question">
                <p className='question-count'>Question {questionsCount} of 10</p>
                <h1 className="question-h1">What is 2+2?</h1>
            </div>
        </div>
    </>
  )
}
