import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

import { BotProvider } from './providers/app.provier'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BotProvider>
      <App />
    </BotProvider>
  </React.StrictMode>
)
