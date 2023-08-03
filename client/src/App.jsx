import React from "react"
import {Routes, Route} from "react-router-dom"
import Nav from "./components/Header/Nav"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Tools from "./pages/Tools"

 
export default function App() {
 return (
   <div>
    <Nav></Nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ressources' element={<Tools/>}/>
        <Route path='/projets' element={<Projects/>}/>
    </Routes>
    Hello world !
   </div>
 )
}