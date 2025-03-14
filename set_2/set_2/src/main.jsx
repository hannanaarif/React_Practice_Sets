import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserProfile from './Q3/UserProfile'
import Gadget from './Q4/Gadget';
import Phone from './Q5/Phone';
import Article from './Q6/Article';
import About from './Q7/About';
import MyGadgets from './Q8/MyGadgets';
import ColorPicker from './Q9/ColorPicker';
// import Greeting from './Q1/Greeting'
// import Product from './Q2/Product'
// import App from './App.jsx'


// const userData = {
//   name: 'John',
//   age: 25,
//   email: 'john@example.com',
//  }

const products = [
  {
    id: 1,
    name: "keyboard",
    description: "Logitech Mechanical Keyboard",
    price: 2000,
  },
  { id: 2,
    name: "mouse", 
    description: "Dell Wireless Mouse",
     price: 1200 },
  {
    id: 3,
    name: "monitor",
    description: "Lenovo 32-inch display Monitor",
    price: 10000,
  },
  { id: 4,
    name: "mobile",
    description: "iPhone 13 Pro Max",
    price: 140000
   },
  {
    id: 5,
    name: "speakers",
    description: "Creative Desktop Speakers",
    price: 5000,
  },
  {
    id: 6,
    name: "headphones",
    description: "Sony over-the-ear wired Headphones with mic",
    price: 1500,
  },
  { id: 7, 
    name: "mobile",
    description: "iPhone 12",
    price: 90000
   },
];

// const heading = 'About Me'
// const name = 'Aarif' // you can put your name
// const learning = 'I am learning React JS currently at neoG Camp.'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorPicker/>
  </StrictMode>
)
