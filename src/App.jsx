import { useState } from 'react'
import './App.css'
import Budget from './Components/Budget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Budget />
    </div>
  )
}

export default App
