import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Items, { Projects } from './Tabs'
import { Photos } from './Meds'
import { Perform } from './Organize'
import { DemoStateHook } from './Monitor'
import { DeamonThread } from './Thread'

createRoot(document.getElementById('root')).render(
  <>
    {/* <Perform/> */}
    {/* <DemoStateHook/> */}
    <DeamonThread/>
    {/* <Photos/> */}
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
