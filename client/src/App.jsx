import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HeaderBar from './pages/headerBar'
import BladderDiary from './pages/BladderDiary'
import KegelCounter from './pages/KegelCounter'

function App() {
 
  return (
    <Routes>
      <Route index element={<HeaderBar/>} />
      <Route path = "/diary" element={<BladderDiary/>} />
      <Route path = "/kegelCounter" element={<KegelCounter/>} />
    </Routes>
  )
}

export default App
