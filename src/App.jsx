import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Notes from './components/Notes'

function App() {
  const [notes, setnote] = useState([
    {
      id:1,
      text:"Hello first Sticky Note"

    },
    {

      id:2,
      text:"Hello second Sticky Note"
    },
    {
      id:3,
      text:"Hello third Sticky Note"

    }

  ])



  return (
    <>
    <Notes notes={notes} setnote={setnote}/>
      
    </>
  )
}

export default App
