import { BrowserRouter } from 'react-router-dom'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './08-reducer/intro-reducer'
import { TodoApp } from './08-reducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
)
