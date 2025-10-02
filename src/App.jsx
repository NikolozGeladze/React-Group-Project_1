import { Route, Routes } from 'react-router-dom'
import './App.css'
import Quiz from './components/Quiz/Quiz'
import StartMenu from './components/startMenu/StartMenu'

function App() {

  return (
    <>
      <div className="background-circles-container">
        <div className="circle-top-left circle"></div>
        <div className="circle-bottom-right circle"></div>
      </div>
      <div className="container">
        <Routes>
          <Route path='/' element={<StartMenu />} />
          <Route path='/quiz/:quizSubject' element={<Quiz />} />
        </Routes>
      </div>
    </>
  )
}

export default App
