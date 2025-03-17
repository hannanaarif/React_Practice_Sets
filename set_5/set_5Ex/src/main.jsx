import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import User from './Q1/User.jsx'
import Product from './Q2/Product.jsx'
import UserProfile from './Q3/UserProfile.jsx'
import UserData from './Q4/UserData.jsx'
import Chat from './Q5/Chat.jsx'
import User from './Q6/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <User/>
  </StrictMode>,
)
