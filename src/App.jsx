import { Route, Routes } from 'react-router-dom'
import './App.css'
import Quiz from './components/Quiz/Quiz'

function App() {

  return (
    <>
      <div className="background-circles-container">
        <div className="circle-top-left circle"></div>
        <div className="circle-bottom-right circle"></div>
      </div>
      <div className="container">
        <Quiz/>
      </div>
      <Routes>
        {/* <Route path='/' element={}/> */}
      </Routes>
    </>
  )
}

export default App
