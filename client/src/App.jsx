import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Tools from "./pages/Tools"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./App.scss"
import Button from "./features/forms/button.features"
import {Columns, Column} from "./layouts/Columns.layouts"
import { Heading, Subheading } from "./features/elements/Headings.features"

 
export default function App() {
 return (
   <>
    <Header></Header>
    <div className="main container">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ressources' element={<Tools/>}/>
          <Route path='/projets' element={<Projects/>}/>
      </Routes>
    </div>
    <Footer></Footer>
   </>
 )
}