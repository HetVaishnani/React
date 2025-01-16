import './App.css'
import { useState } from 'react';
import Form from './Components/Form'

function App() {

  const [pro, setPro] = useState(true)

  return (
    <>

      <div>
        <header>
          <button onClick={() => { setPro(true) }}>Form</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => { setPro(false) }}>Product</button>
        </header>
      </div>


      <div>
        <Form het={pro} /></div>
    </>
  )
}

export default App
