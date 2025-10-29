import { useState } from 'react'  
import './App.css'
import { Book } from './book.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Book Store</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </>
  )
}


export default App
