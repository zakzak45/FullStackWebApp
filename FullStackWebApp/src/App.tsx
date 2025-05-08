
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import LoginInPage from '../components/LoginInPage'
import Student from '../components/Main'



function App() {


  return (
    <>

      <Routes>
        <Route path='/HomePage' element={<Student />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<LoginInPage />} />
      </Routes>

    </>
  )
}

export default App
