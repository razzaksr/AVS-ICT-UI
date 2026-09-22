import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Items, { Projects } from './Tabs'

createRoot(document.getElementById('root')).render(
  <>
    <Items/>
    <Projects />
  </>
  // <StrictMode>
  //   <h1>Hi All welcome to React Development</h1>
  //   <p>Where you will learn Front end Application</p>
  // </StrictMode>
  // <>
  //   <h1>Hi All welcome to React Development</h1>
  //   <p>Where you will learn Front end Application</p>
  // </>
  // <div>
  //   <h1>Hi All welcome to React Development</h1>
  //   <p>Where you will learn Front end Application</p>
  // </div>
  // [
  //   <h1>Hi All welcome to React Development</h1>,
  //   <p>Where you will learn Front end Application</p>
  // ]
)
