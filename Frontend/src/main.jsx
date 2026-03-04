import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AuthProvider from './Features/Auth/Contexts/auth.context.jsx'
import { SongContextProvider } from './Features/Home/Contexts/song.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SongContextProvider>
        <App />
      </SongContextProvider>
    </AuthProvider>
  </StrictMode>,
)
