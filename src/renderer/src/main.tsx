import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/index.css'
import LoginSignup from './pages/LoginSignup'
import MeasureResult from './pages/MeasureResult'
import Layout from './components/Layout'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/measure" element={<MeasureResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
