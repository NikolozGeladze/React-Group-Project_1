import React, { useEffect, useState, useRef } from 'react';
import './Quiz.css';
import { questions } from '../../data';

export default function Quiz() {
  const [questionsCount, setQuestionsCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionProgressBar, setQuestionProgressBar] = useState(questionsCount);
  const [usedIndexes, setUsedIndexes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [question, setQuestion] = useState(null);
  const answerRefs = useRef([]);
  const errorRef = useRef();
  const btn = useRef()


  useEffect(() => {
    chooseQuestion();
  }, []);

  function chooseQuestion() {
    const availableIndexes = questions[0].questions
      .map((_, index) => index)
      .filter(index => !usedIndexes.includes(index));

    const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    const randomQuestion = questions[0].questions[randomIndex];

    setUsedIndexes(prev => [...prev, randomIndex]);
    setQuestion(randomQuestion);
    setSelectedAnswer(null);
    answerRefs.current = [];
  }

  function handleButtonClick() {
    if (selected === null) {
      errorRef.current.classList.add('show');
    }
    else {
      errorRef.current.classList.remove('show');
    }

    const icon = answerRefs.current[selected].querySelector('i');
    if (btn.current.innerText === 'Submit Answer') {
      if (selectedAnswer === question.correctAnswer) {
        answerRefs.current[selected].classList.add('correct');
        answerRefs.current[selected].classList.remove('active');
        icon.className = 'fa-regular fa-circle-check show';
        btn.current.innerText = 'Next Question';
        setIsSubmitted(true);
      }
      else {
        answerRefs.current[selected].classList.add('incorrect');
        answerRefs.current.map((ref, index) => {
          if (ref.textContent.includes(question.correctAnswer)) {
            ref.classList.add('correct');
            const correctIcon = ref.querySelector('i');
            if (correctIcon) {
              correctIcon.className = 'fa-regular fa-circle-check';
            }
          }
          btn.current.innerText = 'Next Question';
          setIsSubmitted(true);
        });
      }
    }
    else if (btn.current.innerText === 'Next Question') {
      answerRefs.current.forEach(ref => {
        icon.className = 'fa-regular fa-circle-xmark';
        ref.classList.remove('correct', 'incorrect', 'active');
      });
      setQuestionProgressBar(prev => prev + 10);
      setQuestionsCount(prev => prev + 1);
      setSelected(null);
      setSelectedAnswer(null);
      chooseQuestion();
      btn.current.innerText = 'Submit Answer';
      setIsSubmitted(false);
    }
  }

  function selectAnswer(index, answerChoice) {
    if (!isSubmitted) {
      setSelected(index);
      setSelectedAnswer(answerChoice);
      errorRef.current.classList.remove('show');
    }
  }

  return (
    <div className="quiz-main-container rubik">
      <div className="quiz-container">
        <div className="question">
          <div className="top">
            <i className='question-count'>Question {questionsCount} of 10</i>
            <h1 className="question-h1">{question?.question}</h1>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${questionProgressBar}%` }}></div>
            </div>
          </div>
        </div>
        <div className="answers">
          {question?.answerChoices.map((answerChoice, index) => (
            <div className={`answer-option ${selected === index ? 'active' : ''}`} key={index} ref={element => (answerRefs.current[index] = element)} onClick={() => selectAnswer(index, answerChoice)}>
              <div className="answer-option-character-answer-choice">
                <div className="answer-option-character">
                  {/* A = 65; B = 66; C = 67; D = 68 */}
                  <p>{String.fromCharCode(65 + index)}</p>
                </div>
                <p>{answerChoice}</p>
              </div>
              <i className="fa-regular fa-circle-xmark"></i>
            </div>
          ))}
          <button className='answer-option submit-answer-btn' ref={btn} onClick={handleButtonClick}>Submit Answer</button>
          <p className="error" ref={errorRef}><i className="fa-regular fa-circle-xmark show"></i> Please select an answer</p>
        </div>
      </div>
    </div>
  );
}
