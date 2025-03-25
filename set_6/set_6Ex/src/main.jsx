import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShowProduct from './Q1/ShowProduct.jsx'
import Todos from './Q2/todo.jsx'
import Habit from './Q3/Habit.jsx'
// import Video from './Q4/Video.jsx'
// import VideoExten from './Q4/VideoExtention.jsx'
import Social from './Q5/Social.jsx'
import Archive from './Q6/Archive.jsx'
import Project from './Q7/Project.jsx'
import UserProfile from './Q8/userProfile.jsx'
import Video from './Q9/Video.jsx'
import SocialMedia from './Q10/SocialMedia.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialMedia/>
  </StrictMode>
)
