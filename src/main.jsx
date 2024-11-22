import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './assets/reset.css'
import './assets/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)