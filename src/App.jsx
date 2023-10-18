
import Login from './Pages/Login'
import Home from './Pages/Home'
import SignUp from "./Pages/SignUp"


import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {

  return (
    <>
     <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />


      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
