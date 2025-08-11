import { useState } from 'react'
import '../styles/App.css'
import { BrowserRouter , Routes , Route } from "react-router-dom"

// Pages
import Home from '../Pages/Home'
import Auth from '../Pages/Auth'
import Canvas from '../Pages/Canvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/canvas' element={<Canvas />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
