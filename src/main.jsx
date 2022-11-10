import { createRoot } from 'react-dom/client'
import { StateContextProvider } from '@/contexts/stateContext'
import Home from '@/pages/home'
import '@/assets/styles/index.css'

createRoot(document.getElementById('root')).render(
  <StateContextProvider>
    <Home />
  </StateContextProvider>
)
