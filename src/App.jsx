import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prac from './assets/Comp/Prac'
import Crud from './assets/Comp/Crud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Crud/>
    </>
  )
}

export default App
