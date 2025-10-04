import { Route, Routes } from 'react-router-dom'
import './App.css'
import Quiz from './components/Quiz/Quiz'
import StartMenu from './components/startMenu/StartMenu'
import Score from './components/Score/Score'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className="background-circles-container">
        <div className="circle-top-left circle"></div>
        <div className="circle-bottom-right circle"></div>
      </div>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' element={<StartMenu />} />
          <Route path='/quiz/:quizSubject' element={<Quiz />} />
          <Route path='/score/:quizSubject/:score' element={<Score />} />
        </Routes>
      </div>
    </>
  )
}

export default App
