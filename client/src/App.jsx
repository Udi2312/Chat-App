import React from 'react'
import Navbar from './components/Navbar'
import { Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SignupPage from './pages/SignupPage' 
import SettingsPage from './pages/SettingsPage'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
const App = () => {
  const { authUser, checkAuth } = useAuthStore()
  useEffect(() => {
    checkAuth()
  }, [checkAuth]);
  console.log({ authUser })
  return (
    <div>
   <Navbar />
   
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/settings' element={<SettingsPage />} />
   </Routes>
    </div>
    
  )
}

export default App