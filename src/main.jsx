import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app'
import './components/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)