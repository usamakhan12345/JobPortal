
import Login from './Pages/Login'
import Home from './Pages/Home'


import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {

  return (
    <>
     <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />

      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
