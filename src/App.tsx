import { useState } from 'react'
import './App.css'

function App() {

  const [decimal, setDecimal] = useState(0)

  return (
    <>
      <h1>Binary to Decimal</h1>
      <textarea onChange={(e) => {
        const userInput: string = e.target.value

        setDecimal(binaryToDecimal(userInput))
      }} cols={30} rows={10}></textarea>
      <h1>{decimal}</h1>
    </>
  )
}

function binaryToDecimal(binary: string): number {
  const decimal = parseInt(binary, 2)

  return decimal
}

export default App
