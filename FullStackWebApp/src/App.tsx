
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import LoginInPage from '../components/LoginInPage'




function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginInPage" element={<LoginInPage />} />
      </Routes>

    </>
  )
}

export default App
