import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Routes
import Home from './pages/Home'
import Account from './pages/Account'

// CSS
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/account'} element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
