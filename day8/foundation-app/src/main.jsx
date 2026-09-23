import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SeachBar/> */}
    {/* <AllCompanies/> */}
    <App/>
  </StrictMode>,
)
