import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style/index.css'

import Base from './pages/Base.jsx'
import LearnPage from './pages/LearnPage.jsx'
import ExcercisePage from './pages/ExcercisePage.jsx'
import SearchPage from './pages/SearchPage.jsx';

import './style/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/exercise" element={<ExcercisePage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
