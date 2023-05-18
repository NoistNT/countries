import { Routes, Route, useLocation } from 'react-router-dom'
import { Landing, Home, Detail, Form } from './views'
import Nav from './components/Nav'
import './App.css'

function App() {
  const { pathname } = useLocation()
  return (
    <div className='App'>
      {pathname !== '/' && <Nav />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/countries' element={<Home />} />
        <Route path='/countries/:id' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
