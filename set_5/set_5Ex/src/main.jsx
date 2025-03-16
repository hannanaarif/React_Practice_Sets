import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import User from './Q1/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <User/>
  </StrictMode>,
)
