import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Character from './Q1/Character.jsx'
import Button from './Q2/Buttons.jsx'
import ItemList from './Q3/itemList.jsx'
import TodoItem from './Q5/todoItems.jsx'
import Book from './Q6/Book.jsx'
import BookGenre from './Q6/BookGenre.jsx'
import Game from './Q7/Game.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game/>
  </StrictMode>,
)
