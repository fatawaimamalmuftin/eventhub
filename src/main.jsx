import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import { BrowserRouter } from 'react-router'
import SelectedProvider from './context/selected/SelectedProvider.jsx'
import UserLogindProvider from './context/userLogind/UserLogindProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserLogindProvider>
      <SelectedProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SelectedProvider>
    </UserLogindProvider>
  </StrictMode>,
)
