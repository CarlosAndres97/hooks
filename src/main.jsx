import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './08-reducer/intro-reducer'
import { TodoApp } from './08-reducer/TodoApp'

createRoot(document.getElementById('root')).render(
  <TodoApp />
)
