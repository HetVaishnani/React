import { useState } from 'react'
import Products from './Components/Products'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Products></Products>
    </>
  )
}

export default App
