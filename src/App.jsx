import React from 'react'

import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mealinfo from './components/Mealinfo'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
