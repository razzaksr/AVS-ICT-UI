import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Items, { Projects } from './Tabs'
import { Photos } from './Meds'

createRoot(document.getElementById('root')).render(
  <>
    <Photos/>
    {/* <Items/>
    <Projects /> */}
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
