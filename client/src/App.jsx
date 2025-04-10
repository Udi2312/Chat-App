import React from 'react'
import Navbar from './components/Navbar'
import { Routes , Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SignupPage from './pages/SignupPage' 
import SettingsPage from './pages/SettingsPage'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import { Loader } from 'lucide-react'
const App = () => {
  const { authUser, checkAuth , isCheckingAuth} = useAuthStore()
  useEffect(() => {
    checkAuth()
  }, [checkAuth]);


  console.log({ authUser })

  if(isCheckingAuth && !authUser) {
    return(
    <div className='flex justify-center items-center h-screen'>
      <Loader className='animate-spin size-10' />
      </div>
    )
  }
  return (
    <div>
   <Navbar />
   
   <Routes>
    <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
    <Route path='/login' element={!authUser ? <LoginPage />: <Navigate to='/' /> } />
    <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
    <Route path='/signup' element={!authUser ? <SignupPage />: <Navigate to='/' /> } />
    <Route path='/settings' element={<SettingsPage />} />
   </Routes>
   </div> 
  ) 
}
export default App