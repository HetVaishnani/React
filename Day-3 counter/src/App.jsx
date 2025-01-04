import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './Components/counter'
function App() {
  let [state, setState] = useState(0)
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}

export default App
