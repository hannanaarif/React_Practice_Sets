import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Weather from './Q1/Weather.jsx'
import UserProfile from './Q2/UserDetails.jsx'
// import Movies from './Q3/Movie.jsx'
import Campany from './Q4/Company.jsx'
import Quote from './Q5/Quote.jsx'
import Movies from './Q6/Movie.jsx'
// import Product from './Q7/Product.jsx'
import Product from './Q9/ProductComp.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product/>
  </StrictMode>,
)
