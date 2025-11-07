import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<h1>view products</h1>}></Route>
          <Route path='/order' element={<h1>order details</h1>}></Route>
          <Route path='/login' element={<h1>login page</h1>}></Route>
          <Route path='/signup' element={<h1>signup page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
