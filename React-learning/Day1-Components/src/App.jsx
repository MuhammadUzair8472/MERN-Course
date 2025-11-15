// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import reactlogo from './assets/react.svg'
import Hello from "./assets/Hello"
import By from "./assets/By"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='test'>App Component</h1>
      <Hello />
      <img src={reactlogo} width="200px" alt="React logo" />
      <By/>
    </>
  )
}

export default App
