import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import Offers from './pages/Offers'
import Header from './components/Header'

function App() {
 

  return (
    <>
    
    <Router>
       <Header/>
       
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
       </Routes>
   
    </Router>
    
    </>
  )
}

export default App
