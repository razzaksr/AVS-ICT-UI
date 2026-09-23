import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Sender } from './PropDril'
import { Modification } from './Spread'
import { Alter } from './Update'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SeachBar/> */}
    {/* <AllCompanies/> */}
    {/* <App/> */}
    {/* <Sender/> */}
    {/* <Modification/> */}
    <Alter/>
  </StrictMode>,
)
