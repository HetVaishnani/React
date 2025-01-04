import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login_Signup from './Components/login-singup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Login_Signup></Login_Signup>
  )
}

export default App
