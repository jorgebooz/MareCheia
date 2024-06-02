import React from 'react'
import './css/style.css'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () =>{

  return(
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
 )
}
export default App
