import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TraineInsert from './pages/insertTrainnee'
import Select from './pages/selectTrainee'
import UpdateTrainee from './pages/UpdateTrainee'

import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Select />}/>
          <Route path='/insert' element={<TraineInsert />}/>
          <Route path='/update/:_id' element={<UpdateTrainee />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
