import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import { BrowserRouter } from 'react-router'
import SelectedProvider from './context/selected/SelectedProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectedProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SelectedProvider>
  </StrictMode>,
)
