
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Suspense } from 'react'
import Footer from './components/Footer'

function App() {

  return (
    <>
       <Header/>
       <Suspense fallback={<h4>Loading...</h4>}>
          <Outlet/> 
       </Suspense> 
       <Footer/>  
    </>
  )
}

export default App
