import { useState } from 'react'
import './App.css'
import Unit2Quiz from './components/Unit2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Unit2Quiz/>
    </>
  )
}

export default App
