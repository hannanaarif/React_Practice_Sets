import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageComponent from './Q1/ImageComponent.jsx'
import Cartoon from './Q4/Cartoon.jsx'
import Vegetable from './Q5/Vegetable.jsx'
import Bouquet from './Q6/bouquet.jsx'
import Flowers from './Q7/Flowers.jsx'
import Donation from './Q8/Donation.jsx'
import Cars from './Q9/Cars.jsx'
import Student from './Q10/Student.jsx'

// const ImageURL='https://picsum.photos/200'
/*
const cartoons = [
  {
    id: 1,
    name: "Mickey Mouse",
    superpower: "Invisibility",
    magnitude: 1,
  },
  {
    id: 2,
    name: "Spongebob Squarepants",
    superpower: "Super Strength",
    magnitude: 3,
  },
  {
    id: 3,
    name: "Bugs Bunny",
    superpower: "Teleportation",
    magnitude: 9,
  },
  {
    id: 4,
    name: "Tom and Jerry",
    superpower: "Intelligence",
    magnitude: 8,
  },
  {
    id: 5,
    name: "The Powerpuff Girls",
    superpower: "Flight",
    magnitude: 10,
  },
];
*/

// const bouquet = [
//   {
//   id: 1,
//   flowers: ['rose', 'lily', 'marigold'],
//   totalFlowers: 9,
//   price: 1400,
//   },
//   {
//   id: 2,
//   flowers: ['snapdragon', 'sunflower'],
//   totalFlowers: 10,
//   price: 3400,
//   },
//  ]

// const DonationData = [
//   {
//  id: 1,
//   name: 'Nitin',
//   Donation: 7800,
//   },
//   {
//   id: 2,
//   name: 'Mehak',
//   Donation: 9500,
//   },
//   {
//   id: 3,
//   name: 'Mehul',
//   Donation: 65000,
//   },
//   {
//   id: 4,
//   name: 'Nina',
//   Donation: 560,
//   },
//  ]

const cars = [
  {
  id: 1,
  name: 'supra',
  price: 500000,
  category: 'sports',
  },
  {
  id: 2,
  name: 'A5',
  price: 700000,
  category: 'luxury',
  },
  {
  id: 3,
  name: 'huyara',
  price: 1500000,
  category: 'sports',
  },
  {
  id: 4,
  name: 'agera R',
  price: 3500000,
  category: 'sports',
  },
 ]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Student/>
  </StrictMode>,
)
