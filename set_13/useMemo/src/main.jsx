import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './Q1/Cart.jsx'
import wishlist from './Q2/wishlist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <wishlist/>
  </StrictMode>,
)
