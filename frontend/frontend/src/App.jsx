
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// seyfeler
import Home from './pages/Home'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import Register from './pages/Register'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/forgot-password' element={<ForgetPassword/>}/>
  <Route path='/reset-password' element={<ResetPassword/>}/>
  <Route/>
  <Route/>
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
