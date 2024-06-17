import { useState } from 'react'

import './App.css'
import { SobreMim } from './components/SessaoSobreMim/SobreMim'
import { NavBar } from './components/NavBar/NavBar'
import { Skills } from './components/Skills/Skills'

function App() {
  

  return (

    <body>
      <NavBar/>
      <SobreMim/>
      <Skills/>
    </body>
  )
}

export default App
