import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer />
    </>
  )
}

export default App
