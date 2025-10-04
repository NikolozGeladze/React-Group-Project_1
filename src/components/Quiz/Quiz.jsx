import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Quiz.css';
import { questions } from '../../data';

export default function Quiz() {
  const [score, setScore] = useState(10)
  const { quizSubject } = useParams();
  const [questionsCount, setQuestionsCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionProgressBar, setQuestionProgressBar] = useState(10);
  const [usedIndexes, setUsedIndexes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [question, setQuestion] = useState(null);
  const [buttonMode, setButtonMode] = useState('submit');
  const answerRefs = useRef([]);
  const errorRef = useRef();
  const btn = useRef()
  const navigate = useNavigate();


  useEffect(() => {
    chooseQuestion();
  }, []);


  function chooseQuestion() {
    const availableIndexes = questions[quizSubject].questions
      .map((_, index) => index)
      .filter(index => !usedIndexes.includes(index));
    if (availableIndexes.length === 0) {
      setUsedIndexes([]);
      return;
    }
    const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    const randomQuestion = questions[quizSubject].questions[randomIndex];
    setUsedIndexes(prev => [...prev, randomIndex]);
    setQuestion(randomQuestion);
    setSelectedAnswer(null);
    answerRefs.current = [];
  }


  function handleButtonClick() {
    if (selected === null) {
      errorRef.current.classList.add('show');
    } else {
      errorRef.current.classList.remove('show');
    }
    const icon = answerRefs.current[selected]?.querySelector('i');
    if (buttonMode === 'submit') {
      if (!question) return;
      if (selectedAnswer === question.correctAnswer) {
        answerRefs.current[selected]?.classList.add('correct');
        answerRefs.current[selected]?.classList.remove('active');
        if (icon) icon.className = 'fa-regular fa-circle-check show';
      } else {
        setScore(prev => prev - 1);
        answerRefs.current[selected]?.classList.add('incorrect');
        answerRefs.current.forEach((ref) => {
          if (ref && ref.textContent && ref.textContent.includes(question.correctAnswer)) {
            ref.classList.add('correct');
            const correctIcon = ref.querySelector('i');
            if (correctIcon) correctIcon.className = 'fa-regular fa-circle-check';
          }
        });
      }
      setIsSubmitted(true);
      setButtonMode('next');
      if (questionsCount === 10) {
        setTimeout(() => navigate(`/score/${quizSubject}/${score}`), 600);
      }
    } else if (buttonMode === 'next') {
      answerRefs.current.forEach(ref => {
        if (!ref) return;
        const i = ref.querySelector('i');
        if (i) i.className = 'fa-regular fa-circle-xmark';
        ref.classList.remove('correct', 'incorrect', 'active');
      });
      setQuestionProgressBar(prev => Math.min(100, prev + 10));
      setQuestionsCount(prev => prev + 1);
      setSelected(null);
      setSelectedAnswer(null);
      setButtonMode('submit');
      setIsSubmitted(false);
      chooseQuestion();
    }
    console.log("Score:", score);
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
          {question?.answerChoices?.map((answerChoice, index) => (
            <div className={`answer-option ${selected === index ? 'active' : ''}`} key={index} ref={element => (answerRefs.current[index] = element)} onClick={() => selectAnswer(index, answerChoice)}>
              <div className="answer-option-character-answer-choice">
                <div className="answer-option-character">
                  <p>{String.fromCharCode(65 + index)}</p>
                </div>
                <p>{answerChoice}</p>
              </div>
              <i className="fa-regular fa-circle-xmark"></i>
            </div>
          ))}
          <button className="submit-answer-btn answer-option" onClick={handleButtonClick} ref={btn}>
            {buttonMode === 'submit' ? 'Submit Answer' : questionsCount === 10 ? 'Submit Answer' : 'Next Question'}
          </button>
          <p className="error" ref={errorRef}><i className="fa-regular fa-circle-xmark show"></i> Please select an answer</p>
        </div>
      </div>
    </div>
  )
}
