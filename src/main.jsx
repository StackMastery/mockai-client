import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import './style.css'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/Auth.Context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthContextProvider>
  </StrictMode>,
)
