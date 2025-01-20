import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { VideoContextProvider } from './context/videoContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VideoContextProvider>
      <App />
    </VideoContextProvider>
  </StrictMode>,
)
