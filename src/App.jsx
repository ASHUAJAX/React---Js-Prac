import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prac from './Comp/Prac'
import Crud from './Comp/Crud'
import DynamicForm from './Comp/DynamicForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Crud/> */}
  <DynamicForm/>
    </>
  )
}

export default App
