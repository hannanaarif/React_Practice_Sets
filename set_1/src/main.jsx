import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import EmployeeCard from './Q1/EmployeeCard.jsx'
// import Button from './Q2/Button.jsx'


// import Stationary from './Q3/Stationary.jsx'
// import Image from './Q4/Image.jsx'
// import Product from './Q6/Product.jsx'

// const products = [
//   { name: 'Perk', quantity: 10, sales: 7 },
//   { name: 'Pepsi', quantity: 10, sales: 20 },
//   { name: 'Coke', quantity: 18, sales: 50 },
//   { name: 'Maggi', quantity: 41, sales: 22 },
//   { name: '5Star', quantity: 7, sales: 9 },
// ]
// const student = {
//   name: 'John Doe',
//   english: 90,
//   maths: 80,
//   computers: 70,
//  }

// import Student from './Q7/Student.jsx'
// import Employee from './Q8/Employee.jsx'
// import Employee from './Q10/Employee.jsx'
import Employee from './Q11/Employee.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Employee />
  </StrictMode>,
)
