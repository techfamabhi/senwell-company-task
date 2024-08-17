import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterApp from './components/CounterApp';

function App() {
   
  return (
    
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<CounterApp />} />
    
        </Routes>
        </BrowserRouter>
        </>
  )
}

export default App