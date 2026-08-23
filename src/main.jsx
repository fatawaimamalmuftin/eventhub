import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import { BrowserRouter } from 'react-router'
import SelectedProvider from './context/selected/SelectedProvider.jsx'

import { Provider } from 'react-redux'
import store, { persist } from './Redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')).render(

  <StrictMode>

    <Provider store={store}>

      <PersistGate loading={null} persistor={persist}>

        <SelectedProvider>

          <BrowserRouter>

            <Router />

          </BrowserRouter>

        </SelectedProvider>

      </PersistGate>

    </Provider>

  </StrictMode>,

)