
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// import { useContext } from 'react'
// import { AuthContext } from './Providers/AuthProviders'
// import LoadingSpinner from './components/LoadingSpinner'
function App() {
// const {loading} = useContext(AuthContext)
//   if(loading){
//     return  <LoadingSpinner/> 
//     }
  return (
    <>
     <div className=''>
     <div
      className='h-16'
      >
     <Navbar></Navbar>
   
     </div>
   <div className='min-h-[calc(100vh-224px)]'>
  <Outlet></Outlet>
   </div>
      <div className=''>
      <Footer></Footer>
      </div>
     </div>
    </>
  )
}

export default App
